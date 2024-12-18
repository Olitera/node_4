const Sequelize = require('sequelize');
const express = require('express');
const config = require('./config');
const db = require('./models')(Sequelize, config.development);
const services = require('./services')(db);
const routes = require('./routes')(services);
const app = require('express')();

app.use(express.json());
app.use('/weapons', routes.weaponsRouter);
app.use('/turtles', routes.turtlesRouter);
app.use('/pizzas', routes.pizzasRouter);
app.use((err) => {
  console.log(err);
});

async function syncDatabase() {
  try {
    await db.sequelize.sync({ force: true });

    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
}

syncDatabase()
  .then(async () => {
    try {
      await db.weapons.create({ name: 'Twin Katanas', dps: 175 });
      await db.weapons.create({ name: 'Nunchaku', dps: 125 });
      await db.weapons.create({ name: 'Bo Staff', dps: 150 });
      await db.weapons.create({ name: 'Sai', dps: 165 });

      await db.pizzas.create({
        name: 'Granola and Licorice Pizza',
        description: 'A sweet and savory combination',
        calories: 250
      });
      await db.pizzas.create({
        name: 'Chocolate Fudge and Extra Garlic Pizza',
        description: 'Rich and aromatic',
        calories: 280
      });
      await db.pizzas.create({
        name: 'Marshmallow and Pepperoni Pizza',
        description: 'Sweet and spicy',
        calories: 220
      });
      await db.pizzas.create({ name: 'Peanut Butter and Clam Pizza', description: 'Nutty and briny', calories: 240 });
      await db.pizzas.create({
        name: 'Peanut Butter and Avocado Pizza With Extra Pickles',
        description: 'Creamy and tangy',
        calories: 260
      });
      await db.pizzas.create({
        name: 'Marshmallow and Asparagus Pizza',
        description: 'Sweet and earthy',
        calories: 200
      });
      await db.pizzas.create({
        name: 'Butterscotch, Onion, and Anchovy Pizza',
        description: 'Sweet and savory',
        calories: 250
      });
      await db.pizzas.create({
        name: 'Tea and Toast Pizza',
        description: 'A soothing and crunchy combination',
        calories: 180
      });
      await db.pizzas.create({
        name: 'Chocolate Sprinkles and Clam Sauce Pizza',
        description: 'Sweet and briny',
        calories: 240
      });
      await db.pizzas.create({ name: 'Chocolate Chip Pizza', description: 'A classic sweet treat', calories: 200 });
      await db.pizzas.create({ name: 'Pepperoni and Hot Fudge Pizza', description: 'Spicy and sweet', calories: 260 });
      await db.pizzas.create({ name: 'Pepperoni Pizza With Pickles', description: 'Savory and tangy', calories: 220 });
      await db.pizzas.create({ name: 'Jelly Bean and Sausage Pizza', description: 'Sweet and spicy', calories: 240 });
      await db.pizzas.create({
        name: 'Peanut Butter and Salami Pizza With Double Yogurt Topping',
        description: 'Nutty and creamy',
        calories: 3280
      });
      await db.pizzas.create({
        name: 'Pizza With Shredded Coconut and Sweet Pickles',
        description: 'Tropical and tangy',
        calories: 220
      });
      await db.pizzas.create({
        name: 'Strawberry and Anchovy Sauce Pizza',
        description: 'Sweet and savory',
        calories: 240
      });
      await db.pizzas.create({ name: 'Hot Oatmeal Pizza', description: 'A warm and comforting treat', calories: 200 });
      await db.pizzas.create({
        name: 'Tuna, Peanut Butter, and Grape Jelly Pizza',
        description: 'A unique and savory combination',
        calories: 260
      });
      await db.pizzas.create({
        name: 'Guacamole and Marshmallow Pizza',
        description: 'Creamy and sweet',
        calories: 240
      });
      await db.pizzas.create({ name: 'Anchovy and Hot Fudge Pizza', description: 'Salty and sweet', calories: 250 });
      await db.pizzas.create({ name: 'Popcorn Pizza', description: 'A fun and crunchy treat', calories: 180 });
      await db.pizzas.create({
        name: 'Chocolate Fudge, Sardine, and Chili Pepper Pizza Topped With Whipped Cream',
        description: 'A rich and spicy combination',
        calories: 300
      });
      await db.pizzas.create({ name: 'Anchovy and Banana Pizza', description: 'Salty and sweet', calories: 220 });
      await db.pizzas.create({ name: 'Goulash Pizza', description: 'A hearty and savory stew', calories: 280 });
      await db.pizzas.create({
        name: 'Turtles on the Orient Express Pizza',
        description: 'A exotic and savory combination',
        calories: 3260
      });
      await db.pizzas.create({ name: 'Mozzarella', description: 'A warm and comforting treat', calories: 220 });


      await db.turtles.create({
        name: 'Leonardo',
        color: 'Blue',
        weaponId: 1,
        firstFavoritePizzaId: 26,
        secondFavoritePizzaId: 15
      });

      await db.turtles.create({
        name: 'Michelangelo',
        color: 'Orange',
        weaponId: 2,
        firstFavoritePizzaId: 2,
        secondFavoritePizzaId: 13
      });

      await db.turtles.create({
        name: 'Donatello',
        color: 'Purple',
        weaponId: 3,
        firstFavoritePizzaId: 19,
        secondFavoritePizzaId: 17
      });

      await db.turtles.create({
        name: 'Raphael',
        color: 'Red',
        weaponId: 4,
        firstFavoritePizzaId: 11,
        secondFavoritePizzaId: 26
      });
    } catch (error) {
      console.error('Database seeding failed:', error);
    }
    startApp();
  })

function startApp() {
  const port = process.env.APP_PORT || 4000;

  app.listen(port, () => {
    console.log(`\x1b[32m App listening on port ${ port }! \x1b[0m`);
  });
}


