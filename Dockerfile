FROM node:18
WORKDIR dapp/
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "app.js"]
