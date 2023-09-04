# Use the official Node.js LTS image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /app/client

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install client dependencies
RUN npm install

# Copy all client files into the container
COPY . .

# Expose the port on which the React client will run (default is 3000)
EXPOSE 3000

# Command to start the React client
CMD ["npm", "start"]
