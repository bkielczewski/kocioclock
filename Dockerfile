FROM node:lts-slim

ENV PORT 4000

RUN apt-get update -q \
    && apt-get -y install \
        curl \
    # Cleanup
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY ./dist /app/dist

HEALTHCHECK CMD curl --fail http://localhost:${PORT} || exit 1
EXPOSE ${PORT}
WORKDIR /app

CMD [ "node", "./dist/server.js" ]
