FROM node:10.15.0-slim

# Create app directory
WORKDIR /usr/app

# Bundle app source
COPY ./package*.json /usr/app/
COPY ./src /usr/app/src/
COPY ./webpack.config.js /usr/app/

# Install app dependencies
RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]