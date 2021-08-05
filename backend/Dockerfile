FROM node:14

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm ci

COPY . .

EXPOSE 3001

CMD ["node", "index.js"]