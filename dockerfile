# Use the official Node.js image from the Docker Hub 
FROM node:22-bullseye

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g live-server


# Copy the rest of the application code
COPY . .

# Set port environment
ENV PORT=5002

# Expose the port the app runs on
EXPOSE 5002

# Start the application
CMD ["sh", "-c", "npx @tailwindcss/cli -i ./input.css -o ./output.css & npx live-server --port=5002"]