# For the Next.js app in development
FROM node:18-alpine as dev
WORKDIR /var/www/nextjs-strapi-app/client
COPY ./package*.json ./
RUN npm install
COPY ./ .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# # For the production build
# FROM node:18-alpine as builder
# WORKDIR /var/www/nextjs-strapi-app/client
# COPY ./package*.json ./
# RUN npm install
# COPY ./ .
# RUN npm run build

# # For serving the built app
# FROM node:18-alpine
# WORKDIR /var/www/nextjs-strapi-app/client
# COPY --from=builder /var/www/nextjs-strapi-app/client/package*.json ./
# RUN npm install --production
# COPY --from=builder /var/www/nextjs-strapi-app/client/.next ./.next
# EXPOSE 3000
# CMD ["npm", "run", "start"]
