import { Material, Materials } from 'Materials'

export const GaiasTears: Material = {
  id: 'GaiasTears',
  originalName: "Gaeus'sTears",
  remasteredName: "Gaia's Tears",
  category: Materials.Stone.Category,
  growthControl: 20,
  weaponAttributes: {
    sharp: 48,
    heavy: 9,
    force: 86,
    tech: 67
  },
  equipmentAttributes: {
    strike: 28,
    slash: 36,
    pierce: 48,
    magic: 60
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 9,
    aura: 7,
    salamander: 10,
    gnome: 6,
    jinn: 10,
    undine: 6
  },
  priceCoefficient: 1950
}
