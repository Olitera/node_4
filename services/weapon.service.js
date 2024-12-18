module.exports = (weapons, Sequelize) => ({
  getAllWeapons: () => weapons.findAll(),
  getCountOfWeapons: () => weapons.count({ where: { dps: { [Sequelize.Op.gt]: 100 } } }),
  getWeaponById: (id) => weapons.findByPk(id),
  createWeapon: (weapon) => weapons.create(weapon),
  updateWeapon: (id, weapon) => weapons.update(weapon, { where: { id }, returning: true }),
  deleteWeapon: (id) => weapons.destroy({ where: { id } }),
})
