FROM node:14-alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
ENV NODE_ENV production
RUN npm run build
RUN npm prune --production
CMD ["npm", "start"]
EXPOSE 3000