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
    allowed_extensions = [".jpg", ".png"]
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

    return JSONResponse(content={"message": f"File {file.filename} uploaded successfully", "file_id": str(file_id)}, status_code=200)

# Retrieve binary value
@app.get("/binary_value/")
async def get_binary_value(value: int = Query(..., ge=0, le=1)):
    return {"binary_value": value}

# Retrieve file by ID
@app.get("/file/{file_id}")
async def get_file(file_id: str):
    try:
        # Retrieve the file from GridFS
        file = await fs_bucket.find({"_id": ObjectId(file_id)}).to_list(length=1)
        if file:
            # Create a GridOut object to read the file
            grid_out = await fs_bucket.open_download_stream(ObjectId(file_id))
            
            # Create a StreamingResponse to send the file
            return StreamingResponse(
                grid_out,
                media_type=file[0]["metadata"]["content_type"],
                headers={"Content-Disposition": f'attachment; filename="{file[0]["filename"]}"'}
            )
        else:
            return JSONResponse(content={"message": "File not found"}, status_code=404)
    except Exception as e:
        return JSONResponse(content={"message": f"An error occurred: {str(e)}"}, status_code=500)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

