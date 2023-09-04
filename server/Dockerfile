# Use the official Node.js LTS image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /app/server

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install server dependencies
RUN npm install

# Copy all server files into the container
COPY . .

# Expose the port on which the Node.js server will run (e.g., 8080)
EXPOSE 8080

# Command to start the Node.js server
CMD ["npm", "start"]
