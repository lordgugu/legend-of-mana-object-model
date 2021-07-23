import { Material, Materials } from 'Materials'

export const AnimalHide: Material = {
  id: 'AnimalHide',
  originalName: 'AnimalHide',
  remasteredName: 'Animal Hide',
  category: Materials.Hide.Category,
  growthControl: 8,
  weaponAttributes: {
    sharp: 10,
    heavy: 1,
    force: 1,
    tech: 1
  },
  equipmentAttributes: {
    strike: 20,
    slash: 8,
    pierce: 12,
    magic: 10
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 7,
    aura: 9,
    salamander: 9,
    gnome: 7,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 90
}
