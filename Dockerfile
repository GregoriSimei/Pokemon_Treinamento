FROM node:13-slim

WORKDIR /home/node/app

COPY package.json /home/node/app

RUN npm install \
    npm install -g @angular/cli@8

COPY . .

CMD ng build --prod
