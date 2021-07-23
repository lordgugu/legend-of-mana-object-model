import { Material, Materials } from 'Materials'

export const Adamantite: Material = {
  id: 'Adamantite',
  name: 'Adamantite',
  category: Materials.Unspecified.Category,
  growthControl: 20,
  weaponAttributes: {
    sharp: 62,
    heavy: 46,
    force: 93,
    tech: 99
  },
  equipmentAttributes: {
    strike: 62,
    slash: 31,
    pierce: 93,
    magic: 62
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 8,
    aura: 8,
    salamander: 8,
    gnome: 8,
    jinn: 8,
    undine: 8
  },
  priceCoefficient: 3600
}
