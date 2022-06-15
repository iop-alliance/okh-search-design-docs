FROM node:16-alpine as base
WORKDIR /app

FROM base AS deps
WORKDIR /deps
COPY package.json .
COPY yarn.lock .
ENV NODE_ENV=production
RUN yarn --frozen-lockfile

FROM base AS production
COPY --from=deps /deps/node_modules/ node_modules/
COPY get_projects.ts .
COPY list_of_lists.json .
COPY package.json .
ENV NODE_ENV=production
CMD sh -c "yarn go"
