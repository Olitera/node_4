module.exports = (pizzaService, Router) => {
  const pizzaRouter = Router();
  return pizzaRouter
    .get('/', async (req, res) => res.json(await pizzaService.getAllPizzas()))
    .get('/favorite', async (req, res) => res.json(await pizzaService.getAllFavoritePizzas()))
    .get('/:id', async (req, res) => res.json(await pizzaService.getPizzaById(req.params.id)))
    .post('/', async (req, res) => res.json(await pizzaService.createPizza(req.body)))
    .put('/fat', async (req, res) => res.json(await pizzaService.updatePizzaWithHighCalories()))
    .put('/:id', async (req, res) => res.json(await pizzaService.updatePizza(req.params.id, req.body)))
    .delete('/:id', async (req, res) => res.json(await pizzaService.deletePizza(req.params.id)));
};


