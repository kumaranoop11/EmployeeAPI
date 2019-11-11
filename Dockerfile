FROM node:10
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm audit fix
EXPOSE 3000
CMD [ "npm", "start" ]