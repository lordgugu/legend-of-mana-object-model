import { ActiveMaterial, Materials } from 'Materials'

export const FossilWood: ActiveMaterial = {
  id: 'FossilWood',
  originalName: 'FossilWood',
  remasteredName: 'Fossil Wood',
  category: Materials.Wood.Category,
  growthControl: 22,
  weaponAttributes: {
    sharp: 40,
    heavy: 24,
    force: 56,
    tech: 16
  },
  equipmentAttributes: {
    strike: 64,
    slash: 20,
    pierce: 28,
    magic: 36
  },
  resistances: {
    wisp: 7,
    shade: 6,
    dryad: 6,
    aura: 9,
    salamander: 10,
    gnome: 6,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 1500,
  activate: Materials.Wood.activate
}
