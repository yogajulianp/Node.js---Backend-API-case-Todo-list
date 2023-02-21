const { Sequelize, DataTypes } = require("sequelize");

//mySQL
const sequelize = new Sequelize(
    process.env.MYSQL_DBNAME, 
    process.env.MYSQL_USER, 
    process.env.MYSQL_PASSWORD, 
    {
    dialect: 'mysql',
    dialectOptions: {
      // Your mysql2 options here
    },
  });

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;


  
  module.exports = db;