import { ActiveMaterial, Materials } from 'Materials'

export const NemesisRock: ActiveMaterial = {
  id: 'NemesisRock',
  originalName: 'NemesisRock',
  remasteredName: 'Nemesis Rock',
  category: Materials.Aerolite.Category,
  growthControl: 16,
  weaponAttributes: {
    sharp: 40,
    heavy: 30,
    force: 60,
    tech: 64
  },
  equipmentAttributes: {
    strike: 40,
    slash: 36,
    pierce: 48,
    magic: 64
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
  priceCoefficient: 1500,
  activate: Materials.Aerolite.activate
}
