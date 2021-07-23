import { ActiveMaterial, Materials } from 'Materials'

export const TuttleRock: ActiveMaterial = {
  id: 'TuttleRock',
  originalName: 'TuttleRock',
  remasteredName: 'Tuttle Rock',
  category: Materials.Aerolite.Category,
  growthControl: 16,
  weaponAttributes: {
    sharp: 35,
    heavy: 26,
    force: 52,
    tech: 56
  },
  equipmentAttributes: {
    strike: 35,
    slash: 31,
    pierce: 42,
    magic: 56
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
  priceCoefficient: 1260,
  activate: Materials.Aerolite.activate
}
