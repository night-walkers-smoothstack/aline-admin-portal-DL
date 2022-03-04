FROM node:current-alpine3.14
LABEL maintainer "Dylan Luttrell"
WORKDIR /app
COPY . .
RUN npm i
CMD ["npm", "start"]