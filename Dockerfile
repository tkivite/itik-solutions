FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN yarn install --silent
COPY . .
RUN yarn build
EXPOSE 3009
CMD ["yarn", "dev"]