import { ActiveMaterial, Materials } from 'Materials'

export const AshWood: ActiveMaterial = {
  id: 'AshWood',
  originalName: 'AshWood',
  remasteredName: 'Ash Wood',
  category: Materials.Wood.Category,
  growthControl: 11,
  weaponAttributes: {
    sharp: 30,
    heavy: 18,
    force: 42,
    tech: 12
  },
  equipmentAttributes: {
    strike: 48,
    slash: 15,
    pierce: 21,
    magic: 27
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
  priceCoefficient: 1050,
  activate: Materials.Wood.activate
}
