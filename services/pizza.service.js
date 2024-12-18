module.exports = (pizzas, Sequelize) => {
  return {
    getAllPizzas: () => pizzas.findAll(),
    getAllFavoritePizzas: () => pizzas.findAll({
      where: {
        id: {
          [Sequelize.Op.in]: [
            Sequelize.literal(
              `(SELECT DISTINCT "firstFavoritePizzaId" FROM "turtles" UNION SELECT DISTINCT "secondFavoritePizzaId" FROM "turtles")`
            )
          ]
        }
      }
    }),
    getPizzaById: (id) => pizzas.findByPk(id),
    createPizza: (pizza) => pizzas.create(pizza),
    updatePizza: (id, pizza) => pizzas.update(pizza, { where: { id }, returning: true }),
    updatePizzaWithHighCalories: () => pizzas.update(
      {
        description: Sequelize.fn('CONCAT', 'SUPER FAT! ', Sequelize.col('description')),
      },
      {
        where: { calories: { [Sequelize.Op.gt]: 3000 } },
        returning: true
      }
    ),
    deletePizza: (id) => pizzas.destroy({ where: { id } }),
  }
}
