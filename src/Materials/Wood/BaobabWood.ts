import { ActiveMaterial, Materials } from 'Materials'

export const BaobabWood: ActiveMaterial = {
  id: 'BaobabWood',
  originalName: 'BaobabWood',
  remasteredName: 'Baobab Wood',
  category: Materials.Wood.Category,
  growthControl: 24,
  weaponAttributes: {
    sharp: 20,
    heavy: 12,
    force: 28,
    tech: 8
  },
  equipmentAttributes: {
    strike: 32,
    slash: 10,
    pierce: 14,
    magic: 18
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
  priceCoefficient: 660,
  activate: Materials.Wood.activate
}
