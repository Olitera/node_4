const Turtle = require('./turtle');
const Weapon = require('./weapon');
const Pizza = require('./pizza');

module.exports = (Sequelize, config) => {
  const sequelize = new Sequelize(config.database, config.username, config.password, config);

  const turtles = Turtle(Sequelize, sequelize);
  const weapons = Weapon(Sequelize, sequelize);
  const pizzas = Pizza(Sequelize , sequelize);

  weapons.hasMany(turtles, { as: 'turtles', foreignKey: 'weaponId' });
  turtles.belongsTo(weapons, { as: 'weapon', foreignKey: 'weaponId' });
  pizzas.hasMany(turtles, { as: 'firstFavoriteTurtles', foreignKey: 'firstFavoritePizzaId' });
  pizzas.hasMany(turtles, { as: 'secondFavoriteTurtles', foreignKey: 'secondFavoritePizzaId' });
  turtles.belongsTo(pizzas, { as: 'firstFavoritePizza', foreignKey: 'firstFavoritePizzaId' });
  turtles.belongsTo(pizzas, { as: 'secondFavoritePizza', foreignKey: 'secondFavoritePizzaId' });

  return {
    turtles,
    weapons,
    pizzas,

    sequelize: sequelize,
    Sequelize: Sequelize,
  };
};
