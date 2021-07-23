import { Material, Materials } from 'Materials'

export const AltenaAlloy: Material = {
  id: 'AltenaAlloy',
  originalName: 'AltenaAlloy',
  remasteredName: 'Altena Alloy',
  category: Materials.Metal.Category,
  growthControl: 18,
  weaponAttributes: {
    sharp: 50,
    heavy: 50,
    force: 50,
    tech: 50
  },
  equipmentAttributes: {
    strike: 50,
    slash: 50,
    pierce: 50,
    magic: 50
  },
  resistances: {
    wisp: 10,
    shade: 10,
    dryad: 10,
    aura: 10,
    salamander: 10,
    gnome: 10,
    jinn: 10,
    undine: 10
  },
  priceCoefficient: 2250
}
