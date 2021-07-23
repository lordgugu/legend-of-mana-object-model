import { Material, Materials } from 'Materials'

export const SirhtansSilk: Material = {
  id: 'SirhtansSilk',
  originalName: "Sultan'sSilk",
  remasteredName: "Sirhtan's Silk",
  category: Materials.Fabric.Category,
  growthControl: 10,
  weaponAttributes: {
    sharp: 28,
    heavy: 1,
    force: 1,
    tech: 1
  },
  equipmentAttributes: {
    strike: 14,
    slash: 14,
    pierce: 14,
    magic: 14
  },
  resistances: {
    wisp: 6,
    shade: 8,
    dryad: 6,
    aura: 10,
    salamander: 10,
    gnome: 7,
    jinn: 7,
    undine: 6
  },
  priceCoefficient: 90
}
