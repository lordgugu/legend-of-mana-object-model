import { Material, Materials } from 'Materials'

export const ValsenaIron: Material = {
  id: 'ValsenaIron',
  originalName: 'ForsenaIron',
  remasteredName: 'Valsena Iron',
  category: Materials.Metal.Category,
  growthControl: 20,
  weaponAttributes: {
    sharp: 15,
    heavy: 15,
    force: 15,
    tech: 15
  },
  equipmentAttributes: {
    strike: 15,
    slash: 15,
    pierce: 15,
    magic: 15
  },
  resistances: {
    wisp: 9,
    shade: 9,
    dryad: 9,
    aura: 9,
    salamander: 9,
    gnome: 9,
    jinn: 9,
    undine: 9
  },
  priceCoefficient: 300
}
