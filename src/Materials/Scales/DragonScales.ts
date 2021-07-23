import { Material, Materials } from 'Materials'

export const DragonScales: Material = {
  id: 'DragonScales',
  originalName: 'DragonScales',
  remasteredName: 'Dragon Scales',
  category: Materials.Scales.Category,
  growthControl: 14,
  weaponAttributes: {
    sharp: 60,
    heavy: 66,
    force: 54,
    tech: 54
  },
  equipmentAttributes: {
    strike: 72,
    slash: 72,
    pierce: 60,
    magic: 30
  },
  resistances: {
    wisp: 7,
    shade: 7,
    dryad: 7,
    aura: 7,
    salamander: 6,
    gnome: 7,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 3000
}
