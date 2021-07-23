import { Material, Materials } from 'Materials'

export const Fullmetal: Material = {
  id: 'Fullmetal',
  name: 'Fullmetal',
  category: Materials.Unspecified.Category,
  growthControl: 20,
  weaponAttributes: {
    sharp: 55,
    heavy: 41,
    force: 68,
    tech: 66
  },
  equipmentAttributes: {
    strike: 44,
    slash: 27,
    pierce: 99,
    magic: 27
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 8,
    aura: 8,
    salamander: 8,
    gnome: 8,
    jinn: 8,
    undine: 8
  },
  priceCoefficient: 3300
}
