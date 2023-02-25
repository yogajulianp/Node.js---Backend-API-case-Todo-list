const { Sequelize, DataTypes } = require("sequelize");

//mySQL
const sequelize = new Sequelize(
    process.env.MYSQL_DBNAME, 
    process.env.MYSQL_USER, 
    process.env.MYSQL_PASSWORD, 
    {
      host: process.env.MYSQL_HOST,
      port: 3306 || process.env.MYSQL_PORT,
      dialect: 'mysql',
      dialectOptions: {
      // Your mysql2 options here
    },
  });

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.todos = require("./todos")(sequelize, Sequelize);
  db.activities = require("./activities")(sequelize, Sequelize);
  
 //one activity has many todos
  db.activities.hasMany(db.todos, {foreignKey: 'activity_group_id'});
  db.todos.belongsTo(db.activities, {foreignKey: 'activity_group_id'});

  module.exports = db;