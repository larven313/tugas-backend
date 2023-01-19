const Sequelize = require("sequelize");
const db = require('../config/database');

const patient = db.define('patient',{ 
  name: Sequelize.STRING,
  phone: Sequelize.STRING,
  address: Sequelize.TEXT,
  status: Sequelize.STRING,
  in_date_at: Sequelize.DATE,
  out_date_at: Sequelize.DATE,
});

// patient.removeAttribute('id');


module.exports = patient;