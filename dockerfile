FROM node

WORKDIR /app

COPY package*.json /app

RUN npm install --verbose

COPY . /app

EXPOSE 8080

CMD [ "npm", "start" ]