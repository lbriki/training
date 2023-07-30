# Use the official Node.js image as a base
FROM node:12

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the port on which the backend will listen
EXPOSE 8420

# Start the backend server
CMD ["npm", "start"]
