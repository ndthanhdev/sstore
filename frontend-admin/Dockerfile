FROM node:latest

MAINTAINER vunguyenhung

RUN mkdir -p /usr/sstore/frontend-admin

WORKDIR /usr/sstore/frontend-admin

COPY . /usr/sstore/frontend-admin
RUN npm install



EXPOSE 4200

ENTRYPOINT ["npm", "start"]
