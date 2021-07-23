import { Material, Materials } from 'Materials'

export const Orihalcon: Material = {
  id: 'Orihalcon',
  name: 'Orihalcon',
  category: Materials.Metal.Category,
  growthControl: 12,
  weaponAttributes: {
    sharp: 28,
    heavy: 28,
    force: 28,
    tech: 28
  },
  equipmentAttributes: {
    strike: 28,
    slash: 28,
    pierce: 28,
    magic: 28
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 7,
    aura: 10,
    salamander: 7,
    gnome: 9,
    jinn: 6,
    undine: 8
  },
  priceCoefficient: 1050
}
