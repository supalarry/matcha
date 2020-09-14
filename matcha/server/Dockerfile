FROM node:12

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install

EXPOSE 8079
CMD [ "node", "server.js" ]
