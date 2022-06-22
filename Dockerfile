FROM node:16-alpine

RUN apk add --no-cache bash

ENV SRV_PATH=/srv/app
RUN mkdir -p $SRV_PATH && chown -R node:node $SRV_PATH

WORKDIR $SRV_PATH
USER node

EXPOSE 3000