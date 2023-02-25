const {DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Activities = sequelize.define("activities", {
        title : {
            type: Sequelize.STRING
        },
        email : {
            type: Sequelize.STRING
        },
      
    });
    return Activities;
}