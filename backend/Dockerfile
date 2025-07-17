# Stage 1: Build the application
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire 'src' directory, which now contains app.js, router.js, server.js, etc.
COPY src ./src
# If you have .env.example at the root, copy it as well
# COPY .env.example ./

# Build your application if it has a build step (e.g., TypeScript compilation, Webpack)
# If your project doesn't have a specific build step, you can comment or remove this line.
# Example for TypeScript: RUN npm run build

# Stage 2: Run the application
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
# Copy the entire 'src' directory, as it contains all your application's JS files
COPY --from=build /app/src ./src
# If you copied .env.example in the build stage and need it here:
# COPY --from=build /app/.env.example ./

# Expose the port your app runs on (assuming 3000 as a common default)
# Make sure this matches the port your 'server.js' uses.
EXPOSE 5544

# Set environment variables for production
ENV NODE_ENV=production

# Command to run the application
# Now, server.js is located inside the 'src' directory
CMD ["node", "src/app.js"]
