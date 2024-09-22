# Base image
FROM debian:bookworm

# Set working directory
WORKDIR /app

# Copy backend files
COPY ./backend /app/backend

# Install dependencies for Python (backend)
RUN apt update && apt-get update && apt install -y python3 python3-pip gnupg curl wget ca-certificates lsb-release

# Install Python dependencies
WORKDIR /app/backend
RUN pip install uvicorn python-multipart opencv-python tensorflow fastapi pillow motor pydantic[core] --break-system-packages

# Expose backend port
EXPOSE 8000

# Command will be run through docker-compose.yml

