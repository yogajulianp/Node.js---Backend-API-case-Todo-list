const {DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Todos = sequelize.define("todos", {
        activity_group_id : {
            type: Sequelize.INTEGER
        },
        title : {
            type: Sequelize.STRING
        },
        is_active : {
            type: Sequelize.BOOLEAN
        },
        priority : {
            type: DataTypes.ENUM,
            values: ['Very High', 'High', 'Medium', 'Low', 'Very Low']
        },
      
    });
    return Todos;
}