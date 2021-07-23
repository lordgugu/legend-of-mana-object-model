import { Material, Materials } from 'Materials'

export const Emerald: Material = {
  id: 'Emerald',
  name: 'Emerald',
  category: Materials.Unspecified.Category,
  growthControl: 8,
  weaponAttributes: {
    sharp: 2,
    heavy: 2,
    force: 2,
    tech: 2
  },
  equipmentAttributes: {
    strike: 1,
    slash: 1,
    pierce: 1,
    magic: 50
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
  priceCoefficient: 4500
}
