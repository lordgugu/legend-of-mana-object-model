import { Material, Materials } from 'Materials'

export const Marble: Material = {
  id: 'Marble',
  name: 'Marble',
  category: Materials.Stone.Category,
  growthControl: 28,
  weaponAttributes: {
    sharp: 12,
    heavy: 2,
    force: 21,
    tech: 16
  },
  equipmentAttributes: {
    strike: 7,
    slash: 9,
    pierce: 12,
    magic: 15
  },
  resistances: {
    wisp: 7,
    shade: 8,
    dryad: 9,
    aura: 7,
    salamander: 7,
    gnome: 6,
    jinn: 10,
    undine: 7
  },
  priceCoefficient: 300
}
