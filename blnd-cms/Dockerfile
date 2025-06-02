# ---------- Build Stage ----------
FROM node:20-alpine AS build

# Install necessary packages
RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    vips-dev \
    git > /dev/null 2>&1

# Set environment variables
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /opt/

# Copy and install dependencies
COPY package.json ./
RUN npm install
RUN npm install -g node-gyp

# Update path for global modules
ENV PATH /opt/node_modules/.bin:$PATH

# Set app directory and copy all files
WORKDIR /opt/app
COPY . .

# Uncomment if build step is needed
# RUN npm run build


# ---------- Runtime Stage ----------
FROM node:20-alpine

# Install only required runtime package
RUN apk add --no-cache vips-dev

# Set environment variables
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /opt/

# Copy installed node_modules from build stage
COPY --from=build /opt/node_modules ./node_modules

# Set app directory and copy app files
WORKDIR /opt/app
COPY --from=build /opt/app ./

# Create necessary directories
RUN mkdir -p /opt/app/public/uploads

# Update PATH
ENV PATH /opt/node_modules/.bin:$PATH

# Set permissions
RUN chown -R node:node /opt/app
RUN chmod -R 755 /opt/app

# Expose application port
EXPOSE 1337

# Default command
CMD ["npx", "strapi", "develop"]