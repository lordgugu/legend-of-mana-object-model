import { Material, Materials } from 'Materials'

export const PeddaStone: Material = {
  id: 'PeddaStone',
  originalName: 'PedanStone',
  remasteredName: 'Pedda Stone',
  category: Materials.Stone.Category,
  growthControl: 24,
  weaponAttributes: {
    sharp: 36,
    heavy: 7,
    force: 64,
    tech: 50
  },
  equipmentAttributes: {
    strike: 21,
    slash: 27,
    pierce: 36,
    magic: 45
  },
  resistances: {
    wisp: 7,
    shade: 8,
    dryad: 9,
    aura: 7,
    salamander: 7,
    gnome: 7,
    jinn: 11,
    undine: 7
  },
  priceCoefficient: 1350
}
