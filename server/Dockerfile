FROM node:20.8-alpine3.17

WORKDIR /usr/src/app/server

COPY package*.json ./

RUN npm install

CMD ["npm", "run" ,"start"]