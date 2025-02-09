FROM node:20.10.0 as builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist .

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]
