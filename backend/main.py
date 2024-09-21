from fastapi import FastAPI, File, UploadFile
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from fastapi.responses import JSONResponse, StreamingResponse
from motor.motor_asyncio import AsyncIOMotorClient
from bson.objectid import ObjectId
from starlette.middleware.cors import CORSMiddleware
from fastapi import Query
from gridfs import NoFile
from typing import List
import os
import io
import uvicorn
import tensorflow as tf

from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np

# Load the pre-trained model
#model = load_model("./backend/final_model.h5")
model = load_model("final_model.h5")


# MongoDB configuration
MONGO_URL = "mongodb://localhost:27017"
#MONGO_URL ="mongodb+srv://freshenide:ign4yYkgasZr9RQ8XEoMFFq72EVE3i@cluster0.dpikz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = AsyncIOMotorClient(MONGO_URL)
db = client.your_database_name

# GridFSBucket for asynchronous file handling
from motor.motor_asyncio import AsyncIOMotorGridFSBucket
fs_bucket = AsyncIOMotorGridFSBucket(db)

# FastAPI application setup
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

UPLOAD_DIRECTORY = "uploads"

@app.get("/")
# Test function
async def hello():
    return JSONResponse(content={"hello": "world"}, status_code=200)

import requests

# Define the crawler functions
def upload_to_imgbb(image_path, imgbb_api_key):
    url = f"https://api.imgbb.com/1/upload?expiration=600&key={imgbb_api_key}"

    headers = {
        "Authorization": f"Client-ID {imgbb_api_key}"
    }
    with open(image_path, 'rb') as image_file:
        response = requests.post(url, headers=headers, files={'image': image_file})
    response_data = response.json()
    if response_data['status'] == 200:
        return response_data['data']['url']
    else:
        raise Exception(f"ImgBB upload failed: {response_data['error']['message']}")

def search_image_with_serpapi(image_url, serpapi_api_key):
    url = "https://serpapi.com/search"
    params = {
        "api_key": serpapi_api_key,
        "engine": "google_reverse_image",
        "image_url": image_url
    }
    response = requests.get(url, params=params)
    response_data = response.json()
    if response.status_code == 200:
        return response_data
    else:
        raise Exception(f"SerpApi search failed: {response_data.get('error', 'Unknown error')}")

def process_image(file_data: bytes, imgbb_api_key: str, serpapi_api_key: str) -> dict:
    # Save file to a temporary path
    temp_path = "temp_image.jpg"
    with open(temp_path, 'wb') as f:
        f.write(file_data)
    
    # Upload the image to ImgBB
    imgbb_url = upload_to_imgbb(temp_path, imgbb_api_key)
    
    # Search for the image using SerpApi
    
    search_result = search_image_with_serpapi(imgbb_url, serpapi_api_key)
    return search_result
    







# Upload file
@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    allowed_extensions = [".jpg",".jpeg",".png"]
    file_ext = os.path.splitext(file.filename)[1].lower()

    if file_ext not in allowed_extensions:
        return JSONResponse(content={"message": "file type not allowed"}, status_code=200)

    contents = await file.read()

    # Store the file in MongoDB using MotorGridFSBucket
    file_id = await fs_bucket.upload_from_stream(
        file.filename,
        io.BytesIO(contents),
        metadata={"content_type": file.content_type}
    )


    # Process the image (requires ImgBB and SerpApi keys)
    imgbb_api_key = "292c53ed71670d59e2df7ea64844cd8e"  # Replace with your ImgBB API key
    serpapi_api_key = "eaf3303f7237e5c9e8e37a44fa104abb83bf90df185dc7bc7bf552b8e1f0b987"  # Replace with your SerpApi API key

    result = process_image(contents, imgbb_api_key, serpapi_api_key)
    detection_result = detector(contents)  # Assuming `detector` processes the image file

    # Store results in MongoDB
    await db["fs.files"].update_one(
        {"_id": ObjectId(file_id)},
        {"$set": {"metadata.result": result, "metadata.detection_result": detection_result}}
    )

    # Return the result through the /file/{file_id} endpoint
    return await get_file(str(file_id))



# Detector function to process the image through the loaded model
from PIL import Image
import numpy as np
import io

# Detector function to process the image through the loaded model
def detector(file_data: bytes) -> int:
    # Load the image from file bytes directly
    img = Image.open(io.BytesIO(file_data))
    
    # Resize the image to match the input shape expected by the model (e.g., 150x150)
    img = img.resize((150, 150))

    # Convert the image to a NumPy array and preprocess it for the model
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    img_array = img_array / 255.0  # Normalize the image

    # Predict using the loaded model
    prediction = model.predict(img_array)

    # Interpret the prediction (adjust according to your model's output)
    return int(100 - (prediction*100))


def extract_image_links(serpapi_response):
    # Extract image results from the response
    image_results = serpapi_response.get('image_results', [])
    
    # Extract the 'link' from each image result
    image_links = [result.get('link') for result in image_results if result.get('link')]
    
    return image_links



@app.get("/file/{file_id}")
async def get_file(file_id: str):
    try:
        file = await db["fs.files"].find_one({"_id": ObjectId(file_id)})
        if file:
            # Create a GridOut object to read the file using fs_bucket
            grid_out = await fs_bucket.open_download_stream(ObjectId(file_id))

            # Read file content
            file_data = await grid_out.read()
            
            # Fetch the results from MongoDB
            result = file.get("metadata",{}).get("result",{})
            detection_result = file.get("metadata", {}).get("detection_result", {})

            return JSONResponse(content={
                "file_id": file_id,
                "percentage_morphed": detection_result,
                "search_result": extract_image_links(result),

            }, status_code=200)
        else:
            return JSONResponse(content={"message": "File not found"}, status_code=404)
    except Exception as e:
        return JSONResponse(content={"message": f"An error occurred: {str(e)}"}, status_code=500)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

