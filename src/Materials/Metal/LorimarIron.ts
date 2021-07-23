import { Material, Materials } from 'Materials'

export const LorimarIron: Material = {
  id: 'LorimarIron',
  originalName: 'LorimarIron',
  remasteredName: 'Lorimar Iron',
  category: Materials.Metal.Category,
  growthControl: 16,
  weaponAttributes: {
    sharp: 45,
    heavy: 45,
    force: 45,
    tech: 45
  },
  equipmentAttributes: {
    strike: 45,
    slash: 45,
    pierce: 45,
    magic: 45
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
  priceCoefficient: 1800
}
