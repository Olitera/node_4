const TurtleService = require('./turtle.service');
const WeaponService = require('./weapon.service');
const PizzaService = require('./pizza.service');

module.exports = (db) => ({
  turtleService: TurtleService(db.sequelize.models.turtles, db.Sequelize),
  weaponService: WeaponService(db.sequelize.models.weapons, db.Sequelize),
  pizzaService: PizzaService(db.sequelize.models.pizzas, db.Sequelize),
});
