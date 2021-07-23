import { ActiveMaterial, Materials } from 'Materials'

export const BiellaRock: ActiveMaterial = {
  id: 'BiellaRock',
  originalName: 'BiellaRock',
  remasteredName: 'Biella Rock',
  category: Materials.Aerolite.Category,
  growthControl: 16,
  weaponAttributes: {
    sharp: 45,
    heavy: 33,
    force: 67,
    tech: 72
  },
  equipmentAttributes: {
    strike: 45,
    slash: 40,
    pierce: 54,
    magic: 72
  },
  resistances: {
    wisp: 7,
    shade: 8,
    dryad: 10,
    aura: 7,
    salamander: 7,
    gnome: 8,
    jinn: 9,
    undine: 8
  },
  priceCoefficient: 1650,
  activate: Materials.Aerolite.activate
}
