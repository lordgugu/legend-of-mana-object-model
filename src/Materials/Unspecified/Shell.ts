import { Material, Materials } from 'Materials'

export const Shell: Material = {
  id: 'Shell',
  name: 'Shell',
  category: Materials.Unspecified.Category,
  growthControl: 14,
  weaponAttributes: {
    sharp: 20,
    heavy: 24,
    force: 16,
    tech: 14
  },
  equipmentAttributes: {
    strike: 26,
    slash: 10,
    pierce: 36,
    magic: 10
  },
  resistances: {
    wisp: 8,
    shade: 7,
    dryad: 9,
    aura: 8,
    salamander: 9,
    gnome: 7,
    jinn: 9,
    undine: 6
  },
  priceCoefficient: 90
}
