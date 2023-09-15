FROM node:18.16.1-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ARG NODE=production
ENV NODE_ENV ${NODE}
RUN npm run build
CMD ["node", "server.js"]