require('dotenv').config();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    "operatorsAliases" : Sequelize.Op,
    logging: false
  },
  test: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE_TEST || 'book_a_meal_test',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    "operatorsAliases" : Sequelize.Op,
    logging: false
  },

  production: {
    use_env_variable: 'DATABASE_URL',
    "operatorsAliases" : Sequelize.Op,
    logging: false
  },
};

