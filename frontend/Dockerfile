FROM node:latest

MAINTAINER vunguyenhung

RUN mkdir -p /usr/sstore/front-end

WORKDIR /usr/sstore/front-end

COPY package.json /usr/sstore/front-end
RUN npm install

EXPOSE 4200

ENTRYPOINT ["npm", "start"]
