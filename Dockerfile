# Use Node.js LTS version
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install git (required for some npm packages)
RUN apk add --no-cache git

# Install dependencies first (for better caching)
COPY package*.json ./
COPY prisma ./prisma/

# Install all dependencies (including devDependencies for build)
RUN npm install

# Generate Prisma Client
RUN npx prisma generate

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Verify build output exists
RUN ls -la dist/ || (echo "Build failed - dist directory not found" && exit 1)
RUN test -f dist/main.js || (echo "Build failed - dist/main.js not found" && exit 1)

# Remove devDependencies to reduce image size
RUN npm prune --production

# Verify dist still exists after prune
RUN test -f dist/main.js || (echo "dist/main.js missing after prune" && exit 1)

# Expose port
EXPOSE 9090

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:9090/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application
CMD ["npm", "run", "start:prod"]

