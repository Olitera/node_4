const { DataTypes } = require('sequelize');

module.exports = (Sequelize, sequelize) => {
  return sequelize.define('turtles', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    color: {
      type: DataTypes.STRING
    },
    weaponId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'weapons',
        key: 'id'
      }
    },
    firstFavoritePizzaId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'pizzas',
        key: 'id'
      }
    },
    secondFavoritePizzaId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'pizzas',
        key: 'id'
      }
    }
  });
};
