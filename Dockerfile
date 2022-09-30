FROM node:16-alpine

ADD . src/

WORKDIR /src

RUN npm i

RUN npx tsc

CMD npm run start