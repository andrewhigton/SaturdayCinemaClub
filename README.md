to do

write readme

how to start

howitworks details



to start, 

NPM RUN DEV

client

FROM alpine:3.10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]



server


FROM node:14.15.1

WORKDIR /usr/src/sat-cinema-club

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]




