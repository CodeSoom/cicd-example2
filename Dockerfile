FROM node:14.18.0

COPY . .

ENTRYPOINT [ "node", "app" ]
