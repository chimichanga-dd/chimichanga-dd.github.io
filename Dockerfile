FROM node:18.16.1-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
CMD ["node", "server.js"]