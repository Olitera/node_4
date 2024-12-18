module.exports = (turtleService, Router) => {
  const turtlesRouter = Router();
  return turtlesRouter
    .get('/', async (req, res) => res.json(await turtleService.getTurtles()))
    .get('/:id', async (req, res) => res.json(await turtleService.getTurtle(req.params.id)))
    .get('/pizza/:pizzaName', async (req, res) => res.json(await  turtleService.getTurtlesByPizza(req.params.pizzaName)))
    .post('/', async (req, res) => res.json(await turtleService.createTurtle(req.body)))
    .put('/:id', async (req, res) => res.json(await turtleService.updateTurtle(req.params.id, req.body)))
    .delete('/:id', async (req, res) => res.json(await turtleService.deleteTurtle(req.params.id)));
};
