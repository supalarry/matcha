FROM node:12.2.0-alpine

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

COPY package.json /client/package.json
RUN yarn install
RUN yarn global add @vue/cli

CMD ["yarn", "serve"]
