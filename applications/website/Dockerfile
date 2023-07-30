# Stage 1: Build Angular app
FROM node:12 AS build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project !!!!!!! and ............
COPY . .

# Build the Angular app
RUN npm run build --prod

# Stage 2: Serve Angular app with Nginx
FROM nginx:latest

# Copy the Angular build artifacts from the previous stage
COPY --from=build-stage /app/dist/website /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
