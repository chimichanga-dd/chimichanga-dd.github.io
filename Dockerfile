FROM node:18.16.1-alpine AS builder
WORKDIR /app
COPY package.json .
ENV NODE_ENV=production
RUN npm install
COPY . .
RUN npm run build
CMD ["node", "server.js"]