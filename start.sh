#!/bin/bash

# Start MongoDB
mongod --bind_ip_all &

# Start backend
cd /app/backend
uvicorn main:app --host 0.0.0.0 --port 8000 --reload &

# Start frontend
cd /app/frontend
npm run dev -- --host 0.0.0.0 &

# Keep the container running
wait
