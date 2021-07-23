import { ActiveMaterial, Materials } from 'Materials'

export const MapleWood: ActiveMaterial = {
  id: 'MapleWood',
  originalName: 'MapleWood',
  remasteredName: 'Maple Wood',
  category: Materials.Wood.Category,
  growthControl: 12,
  weaponAttributes: {
    sharp: 35,
    heavy: 21,
    force: 49,
    tech: 14
  },
  equipmentAttributes: {
    strike: 56,
    slash: 17,
    pierce: 24,
    magic: 31
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
  priceCoefficient: 1200,
  activate: Materials.Wood.activate
}
