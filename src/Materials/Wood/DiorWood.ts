import { ActiveMaterial, Materials } from 'Materials'

export const DiorWood: ActiveMaterial = {
  id: 'DiorWood',
  originalName: 'DiorWood',
  remasteredName: 'Dior Wood',
  category: Materials.Wood.Category,
  growthControl: 10,
  weaponAttributes: {
    sharp: 50,
    heavy: 30,
    force: 70,
    tech: 20
  },
  equipmentAttributes: {
    strike: 80,
    slash: 25,
    pierce: 35,
    magic: 45
  },
  resistances: {
    wisp: 7,
    shade: 8,
    dryad: 5,
    aura: 9,
    salamander: 10,
    gnome: 7,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 1560,
  activate: Materials.Wood.activate
}
