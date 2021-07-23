import { Material, Materials } from 'Materials'

export const LaurentSilver: Material = {
  id: 'LaurentSilver',
  originalName: 'LorantSilver',
  remasteredName: 'Laurent Silver',
  category: Materials.Metal.Category,
  growthControl: 12,
  weaponAttributes: {
    sharp: 25,
    heavy: 25,
    force: 25,
    tech: 25
  },
  equipmentAttributes: {
    strike: 25,
    slash: 25,
    pierce: 25,
    magic: 25
  },
  resistances: {
    wisp: 8,
    shade: 6,
    dryad: 7,
    aura: 7,
    salamander: 7,
    gnome: 7,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 750
}
