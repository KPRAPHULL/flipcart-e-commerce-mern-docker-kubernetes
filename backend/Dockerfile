FROM node:alpine
WORKDIR /server
COPY ./ ./
RUN yarn install
EXPOSE 5000
CMD [ "yarn", "start" ]