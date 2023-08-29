module.exports = {
  development: {
    username: "postgres",
    password: "sword666",
    database: "ecommerce",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "sword666",
    database: "ecommerce",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: "sword666",
    database: "ecommerce",
    host: "localhost",
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
