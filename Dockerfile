# Base image
FROM debian:bookworm

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies for Python (backend)
RUN apt update && apt-get update && apt install -y python3 python3-pip gnupg curl wget ca-certificates lsb-release

# Install MongoDB
RUN curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | gpg --dearmor -o /usr/share/keyrings/mongodb-server-7.0.gpg
RUN echo "deb [signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg] https://repo.mongodb.org/apt/debian $(lsb_release -cs)/mongodb-org/7.0 main" | tee /etc/apt/sources.list.d/mongodb-org-7.0.list
RUN apt update && apt install -y mongodb-org

# Install Python dependencies
WORKDIR /app/backend
RUN pip install -r requirements.txt --break-system-packages

# Install Node.js and npm for Next.js (frontend)
WORKDIR /app
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt install -y nodejs

# Install frontend dependencies
WORKDIR /app/frontend
RUN npm install

# Set permissions
WORKDIR /app
RUN chmod -R 777 /app

# Expose ports for frontend and backend
EXPOSE 5173 8000 27017

# Start MongoDB in the background, then start frontend and backend concurrently
CMD ["sh", "-c", "mongod --fork --logpath /var/log/mongodb.log --dbpath /var/lib/mongodb && npm --prefix ./frontend run dev -- --host 0.0.0.0 & uvicorn backend.main:app --host 0.0.0.0 --reload"]

