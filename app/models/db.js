const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const con = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// TODO: Create User and Task Table

module.exports = con;