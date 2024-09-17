# Use a Debian-based Node image for the build stage
FROM node:16-bullseye-slim as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the application for production
RUN npm run build

# Use Debian-based Nginx for serving the built app
FROM nginx:1-bullseye

# Copy the build from the previous stage to the Nginx root directory
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80 for accessing the application
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]