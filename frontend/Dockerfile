FROM node:alpine as flipcart-app-build
WORKDIR /client
COPY ./ ./
RUN yarn install
ENV SERVER_URL = "# add your backend server url here with port number"
RUN yarn build

FROM nginx:latest
COPY --from=flipcart-app-build /client/build/ /usr/share/nginx/html
EXPOSE 80
