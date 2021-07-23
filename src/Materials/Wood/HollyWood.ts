import { ActiveMaterial, Materials } from 'Materials'

export const HollyWood: ActiveMaterial = {
  id: 'HollyWood',
  originalName: 'HollyWood',
  remasteredName: 'Holly Wood',
  category: Materials.Wood.Category,
  growthControl: 14,
  weaponAttributes: {
    sharp: 15,
    heavy: 9,
    force: 21,
    tech: 6
  },
  equipmentAttributes: {
    strike: 24,
    slash: 7,
    pierce: 10,
    magic: 13
  },
  resistances: {
    wisp: 7,
    shade: 8,
    dryad: 6,
    aura: 9,
    salamander: 10,
    gnome: 7,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 360,
  activate: Materials.Wood.activate
}
