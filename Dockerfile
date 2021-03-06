FROM node:latest

WORKDIR /usr/src/app-backend
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
