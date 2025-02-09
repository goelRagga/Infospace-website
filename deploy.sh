#!/bin/bash
/home/ubuntu/ibv-react-frontend/vite

git pull
#docker rm -f ibv-fe
#docker build -t ibv-fe:latest .
#docker run -itd -p 80:3000 --name ibv-fe ibv-fe:latest
sudo docker-compose up -d --build
docker system prune -f --all
