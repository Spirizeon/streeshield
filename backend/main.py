from fastapi import FastAPI, File, UploadFile
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
model = load_model("final_model.h5")


# MongoDB configuration
MONGO_URL = "mongodb://localhost:27017"
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

    return await get_file(str(file_id))


# Retrieve binary value
def binary_value(value: int) -> dict:
    # This function can handle the binary value and return a result or a more complex object
    return {"binary_value": value}


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
    return 1 if prediction > 0.5 else 0


@app.get("/file/{file_id}")
async def get_file(file_id: str):
    try:
        # Correct the query to find the file from the default GridFS `fs.files` collection
        file = await db["fs.files"].find_one({"_id": ObjectId(file_id)})
        if file:
            # Create a GridOut object to read the file using `fs_bucket`
            grid_out = await fs_bucket.open_download_stream(ObjectId(file_id))

            # Read file content
            file_data = await grid_out.read()

            # Pass the file content to the detector function (for model prediction)
            detection_result = detector(file_data)

            # Pass the detector result to binary_value function
            binary_value_result = binary_value(detection_result)

            # Return the final result
            return JSONResponse(content={"file_id": file_id, "detection_result": detection_result, "binary_value": binary_value_result}, status_code=200)
        else:
            return JSONResponse(content={"message": "File not found"}, status_code=404)
    except Exception as e:
        return JSONResponse(content={"message": f"An error occurred: {str(e)}"}, status_code=500)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

