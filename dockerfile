FROM node:19.2.0

WORKDIR /express-project

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY Server.js .
COPY src/ ./src/

