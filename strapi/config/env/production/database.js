
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME", "strapiDB"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "postgres"),
      // ssl: {
      //   rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
      // },
      ssl: false,
    },
    debug: false,
  },
});