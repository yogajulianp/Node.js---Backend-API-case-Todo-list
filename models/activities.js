const {DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Activities = sequelize.define("activities", {
        // id : {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
        title : {
            type: Sequelize.STRING
        },
        email : {
            type: Sequelize.STRING
        },
      
    });
    return Activities;
}