import { Material, Materials } from 'Materials'

export const TortoiseShell: Material = {
  id: 'TortoiseShell',
  originalName: 'TortoiseShell',
  remasteredName: 'Tortoise Shell',
  category: Materials.Unspecified.Category,
  growthControl: 20,
  weaponAttributes: {
    sharp: 26,
    heavy: 31,
    force: 20,
    tech: 18
  },
  equipmentAttributes: {
    strike: 33,
    slash: 13,
    pierce: 46,
    magic: 13
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 9,
    aura: 7,
    salamander: 9,
    gnome: 8,
    jinn: 9,
    undine: 7
  },
  priceCoefficient: 150
}
