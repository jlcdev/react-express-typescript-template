FROM node:lts
RUN npm install -g pnpm
WORKDIR /app
COPY package*.json .
RUN pnpm install
COPY . .
RUN pnpm -r build
CMD ["pnpm","start"]