FROM node:20.11.0-alpine3.19@sha256:2f46fd49c767554c089a5eb219115313b72748d8f62f5eccb58ef52bc36db4ad AS base

# Enable yarn package manager
RUN corepack enable

# Prepare environment
COPY . /app
WORKDIR /app

# Install common deps
RUN apk update && \
    apk --no-cache add \
      gcompat

FROM base AS prod-deps

RUN --mount=type=cache,id=yarn,target=/yarn/store yarn workspaces focus --production

FROM base AS build

RUN --mount=type=cache,id=yarn,target=/yarn/store yarn workspaces focus
RUN yarn build

FROM base

RUN apk update && \
    apk --no-cache add \
      dumb-init \
      git

COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

EXPOSE 8000
CMD [ "dumb-init", "node", "dist/renovate.js" ]
