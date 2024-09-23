FROM debian:bookworm
EXPOSE 5173 
# Set working directory
WORKDIR /app

# Install necessary packages
COPY . .
RUN apt update && \
    apt install -y python3 python3-pip gnupg curl wget ca-certificates lsb-release && \
    curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | gpg --dearmor -o /usr/share/keyrings/mongodb-server-7.0.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg] https://repo.mongodb.org/apt/debian $(lsb_release -cs)/mongodb-org/7.0 main" | tee /etc/apt/sources.list.d/mongodb-org-7.0.list && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt install -y mongodb-org nodejs && \
    rm -rf /var/lib/apt/lists/*

# Install Python dependencies
WORKDIR /app/backend
RUN pip install --no-cache-dir uvicorn python-multipart opencv-python tensorflow fastapi pillow motor pydantic[core] --break-system-packages 

# Install frontend dependencies
WORKDIR /app/frontend
RUN npm install --production && npm cache clean --force
RUN npm install -D vite
# Set permissions
WORKDIR /app
RUN chmod -R 777 /app

# Start services
CMD ["sh", "-c", "mongod --bind_ip 0.0.0.0 --port 27017 --fork --logpath /var/log/mongodb.log --dbpath /var/lib/mongodb && npm --prefix ./frontend run dev -- --host 0.0.0.0 --port 5173 & uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload && tail -f /var/log/mongodb.log"]

