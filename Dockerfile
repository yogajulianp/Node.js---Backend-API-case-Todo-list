FROM node:16

# Create app directory
WORKDIR /Node-TodoList-API-Docker

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]