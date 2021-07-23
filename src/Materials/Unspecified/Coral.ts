import { Material, Materials } from 'Materials'

export const Coral: Material = {
  id: 'Coral',
  name: 'Coral',
  category: Materials.Unspecified.Category,
  growthControl: 12,
  weaponAttributes: {
    sharp: 18,
    heavy: 21,
    force: 14,
    tech: 12
  },
  equipmentAttributes: {
    strike: 23,
    slash: 9,
    pierce: 32,
    magic: 9
  },
  resistances: {
    wisp: 9,
    shade: 6,
    dryad: 7,
    aura: 7,
    salamander: 9,
    gnome: 7,
    jinn: 9,
    undine: 5
  },
  priceCoefficient: 240
}
