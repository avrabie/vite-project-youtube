FROM node:20-alpine AS BUILD_IMAGE
WORKDIR /app/react-app

COPY package.json ./
RUN npm install

COPY . .

RUN npm run build


FROM node:20-alpine AS PRODUCTION_IMAGE
WORKDIR /app/react-app

COPY --from=BUILD_IMAGE /app/react-app/dist ./dist

EXPOSE 3000
COPY package.json ./
COPY vite.config.js ./
RUN npm install
CMD ["npm", "run", "preview"]
