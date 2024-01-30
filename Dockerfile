# build
FROM node:20 AS build-step
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
ARG CONFIGURATION=production
RUN ng build --configuration=${CONFIGURATION} --output-path=dist

# deploy
FROM nginx:alpine
COPY --from=build-step /app/dist/browser/ /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
