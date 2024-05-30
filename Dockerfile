# syntax=docker/dockerfile:1

ARG NODE_VERSION=14

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

# Install Angular CLI globally
RUN npm install -g @angular/cli@12.0.0

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Angular application for production
RUN ng build

# Expose the default Angular port
EXPOSE 4200

# Command to run the application
CMD ["ng", "serve", "--host", "0.0.0.0"]
