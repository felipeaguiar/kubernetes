FROM node:14.17.5-alpine3.11
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 8000
CMD [ "npm", "start" ]