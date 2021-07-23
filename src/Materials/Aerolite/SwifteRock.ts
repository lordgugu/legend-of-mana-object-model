import { ActiveMaterial, Materials } from 'Materials'

export const SwifteRock: ActiveMaterial = {
  id: 'SwifteRock',
  originalName: 'SwifteRock',
  remasteredName: 'Swifte Rock',
  category: Materials.Aerolite.Category,
  growthControl: 16,
  weaponAttributes: {
    sharp: 50,
    heavy: 37,
    force: 75,
    tech: 80
  },
  equipmentAttributes: {
    strike: 50,
    slash: 45,
    pierce: 60,
    magic: 80
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
  priceCoefficient: 1800,
  activate: Materials.Aerolite.activate
}
