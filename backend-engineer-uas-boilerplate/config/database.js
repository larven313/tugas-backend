// TODO 3: SETUP CONFIG DATABASE
const Sequelize = require("sequelize");

const db = new Sequelize('db_uts_backend', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });


module.exports = db;