# Use Node 22 base image
FROM node:22

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the port (default for webpack-dev-server)
EXPOSE 8080

# Start the dev server
CMD ["make", "dev"] 