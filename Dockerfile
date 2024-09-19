# Base image
FROM debian:bookworm

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Expose ports for both backend and frontend
EXPOSE 8000 5173

# Install dependencies for Python (backend)
RUN apt update && apt install -y python3 python3-pip
WORKDIR /app/backend
# Install Python dependencies
RUN pip install -r requirements.txt
RUN source env/bin/activate
WORKDIR /app
# Install Node.js and npm for Next.js (frontend)
RUN apt install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt install -y nodejs

WORKDIR /app/frontend
# Install frontend dependencies
RUN npm install
WORKDIR /app

# Set up for running backend and frontend concurrently
CMD [ "sh", "-c", "npm --prefix ./frontend run dev & uvicorn backend.main:app --host 0.0.0.0 --reload" ]

