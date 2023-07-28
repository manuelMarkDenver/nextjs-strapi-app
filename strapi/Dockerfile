# Creating multi-stage build for production
FROM node:18-alpine as build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /var/www/nextjs-strapi-app/strapi
COPY package*.json ./
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install --omit=dev
ENV PATH /var/www/nextjs-strapi-app/strapi/node_modules/.bin:$PATH
WORKDIR /var/www/nextjs-strapi-app/strapi/
COPY . .
RUN npm run build

# Creating final production image
FROM node:18-alpine
RUN apk add --no-cache vips-dev
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /var/www/nextjs-strapi-app/strapi/
COPY --from=build /var/www/nextjs-strapi-app/strapi/node_modules ./node_modules
WORKDIR /var/www/nextjs-strapi-app/strapi
COPY --from=build /var/www/nextjs-strapi-app/strapi ./
ENV PATH /var/www/nextjs-strapi-app/strapi/node_modules/.bin:$PATH

RUN chown -R node:node /var/www/nextjs-strapi-app/strapi
USER node
EXPOSE 1337
CMD ["npm", "run", "start"]
