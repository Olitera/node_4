const { DataTypes } = require('sequelize');

module.exports = (Sequelize, sequelize) => {
  return sequelize.define('pizzas', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    calories: {
      type: DataTypes.DOUBLE
    }
  });
};
