FROM node:18-alpine

#RUN mkdir -p /home//diceroll

WORKDIR /home/$user/diceroll

COPY package*.json ./

RUN npm install -g npm
RUN npm install discord.js

COPY . .

CMD ["node", "app.js"] 