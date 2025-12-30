# Use Node.js LTS version with Alpine 3.18 (supports OpenSSL 1.1 for Prisma)
FROM node:20-alpine3.18

# Set working directory
WORKDIR /app

# Install git and OpenSSL 1.1 compatibility (required for npm packages and Prisma)
RUN apk add --no-cache git openssl openssl1.1-compat

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

# Verify build output exists and find main.js
RUN ls -la dist/ || (echo "Build failed - dist directory not found" && exit 1)
RUN find dist -name "main.js" -type f || (echo "Build failed - main.js not found" && find dist -type f | head -20 && exit 1)

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

