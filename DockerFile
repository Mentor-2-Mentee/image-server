#install
FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

#build
FROM node:16
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 6080
EXPOSE 6443

CMD ["npm", "run", "start:prod"]