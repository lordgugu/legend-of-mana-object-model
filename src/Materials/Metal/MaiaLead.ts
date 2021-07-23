import { Material, Materials } from 'Materials'

export const MaiaLead: Material = {
  id: 'MaiaLead',
  originalName: 'MaiaLead',
  remasteredName: 'Maia Lead',
  category: Materials.Metal.Category,
  growthControl: 48,
  weaponAttributes: {
    sharp: 36,
    heavy: 3,
    force: 68,
    tech: 18
  },
  equipmentAttributes: {
    strike: 3,
    slash: 18,
    pierce: 36,
    magic: 36
  },
  resistances: {
    wisp: 32,
    shade: 32,
    dryad: 32,
    aura: 32,
    salamander: 32,
    gnome: 32,
    jinn: 32,
    undine: 32
  },
  priceCoefficient: 1350
}
