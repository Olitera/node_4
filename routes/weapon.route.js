module.exports = (weaponService, Router) => {
  const weaponsRouter = Router();

  return weaponsRouter
    .get('/', async (req, res) => res.json(await weaponService.getAllWeapons()))
    .get('/count', async (req, res) => res.json(await  weaponService.getCountOfWeapons()))
    .get('/:id', async (req, res) => res.json(await weaponService.getWeaponById(req.params.id)))
    .post('/', async (req, res) => res.json(await weaponService.createWeapon(req.body)))
    .put('/:id', async (req, res) => res.json(await weaponService.updateWeapon(req.params.id, req.body)))
    .delete('/:id', async (req, res) => res.json(await weaponService.deleteWeapon(req.params.id)))
}
