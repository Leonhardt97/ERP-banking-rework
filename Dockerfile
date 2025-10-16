### Multi-stage Dockerfile for Nuxt 4 (Nitro) production image
# Minimal multi-stage Dockerfile for Nuxt 4 (Nitro)
# - Uses Debian slim to avoid musl/glibc binding issues that can appear on Alpine
# - Enables corepack (per Nuxt docs)
# - Installs deps while skipping lifecycle scripts, copies source, runs postinstall and build,
#   prunes dev-deps and copies artifacts to a small runtime image.

FROM node:22-bullseye-slim AS build
WORKDIR /app

# Enable corepack (recommended by Nuxt docs)
RUN corepack enable

# Copy package manifests for layer caching
COPY package.json package-lock.json* ./

# Install native build tools and install dependencies (skip lifecycle scripts initially)
RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates python3 build-essential make g++ pkg-config \
  && rm -rf /var/lib/apt/lists/* \
  && npm ci --silent --ignore-scripts

# Copy source and run postinstall + build
COPY . .
RUN npm run postinstall && npm run build

# Remove dev dependencies to keep node_modules small for runtime
RUN npm prune --production

### Dev stage (til HMR / udvikling)
FROM node:22-bullseye-slim AS dev
WORKDIR /app

# Optional: enable corepack (if you use pnpm)
RUN corepack enable

# Copy only manifests and install (node_modules vil leve i image, så native bindings matcher)
COPY package.json package-lock.json* ./
RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates \
  && rm -rf /var/lib/apt/lists/* \
  && npm ci

# Copy source (bind-mount i compose vil typisk overskrive dette, men node_modules bevares)
COPY . .

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

# Kør nuxt dev (HMR)
CMD ["npm", "run", "dev"]

### Runtime stage
FROM node:22-bullseye-slim AS runtime
WORKDIR /app

# Set environment for Nitro
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Copy only the build output and production node_modules
COPY --from=build /app/.output ./.output
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 3000

# Use the unprivileged node user from the official image
USER node

CMD ["node", ".output/server/index.mjs"]
