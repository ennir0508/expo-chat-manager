FROM node:18

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN yarn add vite

