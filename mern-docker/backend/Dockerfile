# Use the official Node.js image as the base image
FROM node:20-alpine

# Create and change to the app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# ENV PORT=443

# Expose the port the app runs on
EXPOSE 443
