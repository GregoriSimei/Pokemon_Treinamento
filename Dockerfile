FROM node:13-slim

WORKDIR /home/node/app

RUN npm install -g @angular/cli@8

COPY . .
