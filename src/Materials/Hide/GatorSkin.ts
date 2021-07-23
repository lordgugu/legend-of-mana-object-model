import { Material, Materials } from 'Materials'

export const GatorSkin: Material = {
  id: 'GatorSkin',
  originalName: 'GatorSkin',
  remasteredName: 'Gator Skin',
  category: Materials.Hide.Category,
  growthControl: 12,
  weaponAttributes: {
    sharp: 18,
    heavy: 1,
    force: 1,
    tech: 1
  },
  equipmentAttributes: {
    strike: 36,
    slash: 14,
    pierce: 21,
    magic: 18
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 7,
    aura: 9,
    salamander: 9,
    gnome: 8,
    jinn: 8,
    undine: 6
  },
  priceCoefficient: 180
}
