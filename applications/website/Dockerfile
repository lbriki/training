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
COPY --from=build /app/dist/website /etc/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
# Create the /assets/data folder to store new images
RUN mkdir -p /usr/share/nginx/html/assets/data
 # Start Nginx server
 CMD ["nginx", "-g", "daemon off;"]



# Stage 1: Build Angular app
# Stage 1: Build Angular app
# Stage 1: Build Angular app
# FROM node:12-alpine as build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install 
# RUN npm install -g @angular/cli
# COPY . .
# RUN npm run build --prod

# # Stage 2: Create Nginx server with the built Angular app
# FROM nginx:alpine

# # Remove the default Nginx configuration
# RUN rm /etc/nginx/conf.d/default.conf

# # Copy the new Nginx configuration
# COPY nginx.conf /etc/nginx/conf.d/

# # Expose port 8081 for Nginx
# EXPOSE 8081

# # Copy the built Angular app to Nginx's HTML folder
# COPY --from=build /app/dist/website /usr/share/nginx/html

# # Create the /assets/data folder to store new images
# RUN mkdir -p /usr/share/nginx/html/assets/data

# # Start Nginx server
# CMD ["nginx", "-g", "daemon off;"]

