FROM nodesource/node:4.0

ADD package.json package.json  
RUN npm install
ADD . .
RUN node_modules/.bin/bower install

ENV PORT=8080

EXPOSE $PORT

CMD ["npm", "start"]
