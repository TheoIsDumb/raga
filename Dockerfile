FROM node:20.5-alpine
WORKDIR /app
RUN mkdir /app/build
COPY build /app/build
COPY package.json /app
RUN npm i
CMD ["node", "/app/build"]