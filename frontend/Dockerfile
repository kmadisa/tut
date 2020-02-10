FROM node:lts-alpine

RUN npm install -g @angular/cli

# make the 'app' folder the current working directory
WORKDIR /app

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
#RUN npm run build

EXPOSE 4200
