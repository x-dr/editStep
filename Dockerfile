FROM node:lts-alpine

ENV PORT='8080'

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# EXPOSE 8080

CMD [ "npm", "start" ]

# docker run -it --rm  -p 3002:8080 editstep