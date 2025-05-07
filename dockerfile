# Use the latest Bun base image available
FROM oven/bun:latest AS base

WORKDIR /app

# Copy package.json and bun.lockb to the current working directory
COPY package.json .
COPY bun.lockb .

# Install dependencies with verbosity for better error messages
RUN bun install --verbose --no-save --install-ignore-scripts

# Copy the rest of the application code
COPY . .

# Build your application
RUN bun run build

# Set the command to run your application
CMD ["bun", "run", "start"]