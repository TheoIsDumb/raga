# Base image with Node.js
FROM node:20.5-alpine AS base

# Set working directory for the build
WORKDIR /app

# Copy package.json and yarn.lock files (if yarn.lock exists)
COPY package.json yarn.lock* ./

# Install dependencies
# This step is separate to take advantage of Docker layer caching
RUN yarn install --frozen-lockfile

# Copy the rest of your SvelteKit app's source code
COPY . .

# Build the SvelteKit app
# Adjust the memory limit based on your specific requirements.
# This example uses 1 GB.
# If you don't need to set a memory limit, you can remove the
# set the deploy target to node
RUN NODE_OPTIONS="--max-old-space-size=1024" DEPLOY_TARGET=node yarn build

# Create a new stage for running the app
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Don't run production as root - create a non-root user
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 svelte

USER svelte

# Copy the built app and the necessary node modules from the builder stage
COPY --from=base /app/package.json .
COPY --from=base /app/build ./build
COPY --from=base /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Start the SvelteKit app
CMD [ "node", "build" ]
