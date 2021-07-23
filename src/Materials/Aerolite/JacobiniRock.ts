import { ActiveMaterial, Materials } from 'Materials'

export const JacobiniRock: ActiveMaterial = {
  id: 'JacobiniRock',
  originalName: 'JacobiniRock',
  remasteredName: 'Jacobini Rock',
  category: Materials.Aerolite.Category,
  growthControl: 16,
  weaponAttributes: {
    sharp: 15,
    heavy: 11,
    force: 22,
    tech: 24
  },
  equipmentAttributes: {
    strike: 15,
    slash: 13,
    pierce: 18,
    magic: 24
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
  priceCoefficient: 360,
  activate: Materials.Aerolite.activate
}
