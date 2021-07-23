import { ActiveMaterial, Materials } from 'Materials'

export const HalleyRock: ActiveMaterial = {
  id: 'HalleyRock',
  originalName: 'HalleyRock',
  remasteredName: 'Halley Rock',
  category: Materials.Aerolite.Category,
  growthControl: 16,
  weaponAttributes: {
    sharp: 20,
    heavy: 15,
    force: 30,
    tech: 32
  },
  equipmentAttributes: {
    strike: 20,
    slash: 18,
    pierce: 24,
    magic: 32
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
  priceCoefficient: 600,
  activate: Materials.Aerolite.activate
}
