import { ActiveMaterial, Materials } from 'Materials'

export const AnkhRock: ActiveMaterial = {
  id: 'AnkhRock',
  originalName: 'AnkhRock',
  remasteredName: 'Ankh Rock',
  category: Materials.Aerolite.Category,
  growthControl: 16,
  weaponAttributes: {
    sharp: 25,
    heavy: 18,
    force: 37,
    tech: 40
  },
  equipmentAttributes: {
    strike: 25,
    slash: 22,
    pierce: 30,
    magic: 40
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
  priceCoefficient: 660,
  activate: Materials.Aerolite.activate
}
