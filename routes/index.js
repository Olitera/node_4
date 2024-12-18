const { Router } = require('express');

module.exports = (services) => ({
  turtlesRouter: require('./turtle.route')(services.turtleService, Router),
  weaponsRouter: require('./weapon.route')(services.weaponService, Router),
  pizzasRouter: require('./pizza.route')(services.pizzaService, Router),
});
