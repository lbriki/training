# # Stage 1: Build Angular app
# FROM node:12-alpine as build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install 
# RUN npm install -g @angular/cli
# COPY . .
# RUN npm run build --prod

# # Stage 2: Create Nginx server with the built Angular app
# FROM nginx:alpine
# COPY --from=build /app/dist/website /etc/nginx/html
# COPY /nginx.conf /etc/nginx/conf.d/default.conf

# # Add a volume to receive new images
# VOLUME ["/assets/data"]

# # Start Nginx server
# CMD ["nginx", "-g", "daemon off;"]
# Stage 1: Build Angular app
# Stage 1: Build Angular app
FROM node:12-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install 
RUN npm install -g @angular/cli
COPY . .
RUN npm run build --prod

# Stage 2: Create Nginx server with the built Angular app
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the new Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

# Create the /assets/data folder to store new images
RUN mkdir -p /assets/data

# Copy the built Angular app to Nginx's HTML folder
COPY --from=build /app/dist/website /etc/nginx/html

# Install rsync
RUN apk update && apk add rsync

# Add the synchronization script
COPY sync-assets.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/sync-assets.sh

# Expose port 8081 for Nginx
EXPOSE 8081

# Start Nginx server and run the synchronization script in the background
CMD ["sh", "-c", "sync-assets.sh & nginx -g 'daemon off;'"]
