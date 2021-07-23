import { Material, Materials } from 'Materials'

export const IshePlatinum: Material = {
  id: 'IshePlatinum',
  originalName: 'IshePlatinum',
  remasteredName: 'Ishe Platinum',
  category: Materials.Metal.Category,
  growthControl: 16,
  weaponAttributes: {
    sharp: 40,
    heavy: 40,
    force: 40,
    tech: 40
  },
  equipmentAttributes: {
    strike: 40,
    slash: 40,
    pierce: 40,
    magic: 40
  },
  resistances: {
    wisp: 7,
    shade: 7,
    dryad: 8,
    aura: 8,
    salamander: 8,
    gnome: 8,
    jinn: 8,
    undine: 8
  },
  priceCoefficient: 1500
}
