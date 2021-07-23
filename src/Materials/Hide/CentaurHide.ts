import { Material, Materials } from 'Materials'

export const CentaurHide: Material = {
  id: 'CentaurHide',
  originalName: 'CentaurHide',
  remasteredName: 'Centaur Hide',
  category: Materials.Hide.Category,
  growthControl: 20,
  weaponAttributes: {
    sharp: 26,
    heavy: 1,
    force: 1,
    tech: 1
  },
  equipmentAttributes: {
    strike: 42,
    slash: 20,
    pierce: 31,
    magic: 26
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 9,
    aura: 7,
    salamander: 8,
    gnome: 7,
    jinn: 8,
    undine: 8
  },
  priceCoefficient: 360
}
