FROM node:18.18.0-alpine3.17 as BUILD
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
RUN npm prune --production

FROM node:18.18.0-alpine3.17
WORKDIR /app
COPY --from=BUILD /app/dist ./dist
COPY --from=BUILD /app/package.json .
COPY --from=BUILD /app/node_modules ./node_modules
CMD ["npm", "run", "start:prod"]