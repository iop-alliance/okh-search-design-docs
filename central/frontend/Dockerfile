FROM node:16-alpine as base
WORKDIR /app

# The build stage installs the development dependencies, runs the build and
# then moves to another folder to install the production/non-dev dependencies.
# The build folder (.next) and the production dependencies (/deps/node_modules)
# are copied during the next stage resulting in a more minimal image.
FROM base AS build
WORKDIR /build
COPY . .
ENV NODE_ENV=development
RUN yarn --frozen-lockfile
ENV NODE_ENV=production
RUN yarn build
WORKDIR /deps
COPY package.json .
COPY yarn.lock .
RUN yarn --frozen-lockfile

FROM base AS production
COPY --from=build /build/.next/ .next/
COPY --from=build /deps/node_modules/ node_modules/
COPY package.json .
COPY next.config.js .
COPY public/ public/
RUN mkdir src/
COPY src/server.js src/server.js
ENV NODE_ENV=production
CMD yarn start
