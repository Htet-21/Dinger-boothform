FROM node:16-alpine

RUN apk update && apk upgrade && apk add --no-cache bash git

WORKDIR /usr/src/app

ENV NODE_ENV='production'
ENV STAGING_MERCHANT_BACKEND_URL='https://test.dinger.asia/api'
ENV APP_ID=kp22da41f399e7447ebcd2c75721dabc
ENV KBZ_APP_KEY=efbd54023c82837d23fdbe93cc4ed125
ENV MERCH_CODE=200103
ENV PAYMENT_URL = 'https://test.dinger.asia/api/'
ENV FORM_URL = 'https://test.dinger.asia/form-payment/api/'
COPY package*.json ./


RUN npm install
#RUN npm uninstall redux --save-dev
#RUN npm i redux --save
#RUN npm install eslint -g -D
RUN npm init @eslint/config
COPY . .

RUN npm run build
EXPOSE 3000
CMD ["npm","start"]

