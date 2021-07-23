import { Material, Materials } from 'Materials'

export const BeiserGold: Material = {
  id: 'BeiserGold',
  originalName: 'VizelGold',
  remasteredName: 'Beiser Gold',
  category: Materials.Metal.Category,
  growthControl: 16,
  weaponAttributes: {
    sharp: 35,
    heavy: 35,
    force: 35,
    tech: 35
  },
  equipmentAttributes: {
    strike: 35,
    slash: 35,
    pierce: 35,
    magic: 35
  },
  resistances: {
    wisp: 7,
    shade: 9,
    dryad: 9,
    aura: 9,
    salamander: 9,
    gnome: 9,
    jinn: 9,
    undine: 9
  },
  priceCoefficient: 1200
}
