FROM node:latest

MAINTAINER vunguyenhung

RUN mkdir -p /usr/sstore/frontend

WORKDIR /usr/sstore/frontend

COPY . /usr/sstore/frontend
RUN npm install



EXPOSE 4200

ENTRYPOINT ["npm", "start"]
