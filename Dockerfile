FROM node:8.11.1

WORKDIR /usr/src/sat-cin-club

COPY ./ ./

RUN npm install --silence

CMD ["/bin/bash"]