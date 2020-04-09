FROM node:13-slim

WORKDIR /home/node/app

RUN npm install -g @angular/cli@8

COPY . .

CMD npm install
CMD ng build --open
