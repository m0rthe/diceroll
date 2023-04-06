FROM node:18-alpine

#RUN mkdir -p /home/diceroll

WORKDIR /home/diceroll

COPY package*.json ./

RUN npm install -g npm

COPY . .

CMD ["node", "app.js"]