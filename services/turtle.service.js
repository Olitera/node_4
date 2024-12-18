module.exports = (turtles, Sequelize) => {
  return {
    getTurtles: () => turtles.findAll({ include: ['weapon', 'firstFavoritePizza', 'secondFavoritePizza'] }),
    getTurtlesByPizza: (pizzaName) => turtles.findAll( {
      where: {[Sequelize.Op.or]: [{'$firstFavoritePizza.name$': pizzaName}, {'$secondFavoritePizza.name$': pizzaName} ]
},  include:  [ 'weapon', 'firstFavoritePizza', 'secondFavoritePizza'] }),
    getTurtle: (id) => turtles.findByPk(id),
    createTurtle: (turtle) => turtles.create(turtle),
    updateTurtle: (id, turtle) => turtles.update({ ...turtle }, { where: { id }, returning: true }),
    deleteTurtle: (id) => turtles.destroy({ where: { id } }),
  };
};
