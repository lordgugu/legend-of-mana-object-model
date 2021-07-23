import { ActiveMaterial, Materials } from 'Materials'

export const VinekRock: ActiveMaterial = {
  id: 'VinekRock',
  originalName: 'VinekRock',
  remasteredName: 'Vinek Rock',
  category: Materials.Aerolite.Category,
  growthControl: 16,
  weaponAttributes: {
    sharp: 30,
    heavy: 22,
    force: 45,
    tech: 48
  },
  equipmentAttributes: {
    strike: 30,
    slash: 27,
    pierce: 36,
    magic: 48
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
  priceCoefficient: 1050,
  activate: Materials.Aerolite.activate
}
