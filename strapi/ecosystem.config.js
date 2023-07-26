module.exports = {
  apps: [
    {
      name: "nextjs-strapi-app",
      cwd: "/var/www/nextjs-strapi-app/strapi", // must have absolute path
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
