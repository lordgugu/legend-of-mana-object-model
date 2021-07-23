import { Material, Materials } from 'Materials'

export const Fossil: Material = {
  id: 'Fossil',
  name: 'Fossil',
  category: Materials.Bone.Category,
  growthControl: 20,
  weaponAttributes: {
    sharp: 57,
    heavy: 43,
    force: 48,
    tech: 48
  },
  equipmentAttributes: {
    strike: 36,
    slash: 60,
    pierce: 24,
    magic: 36
  },
  resistances: {
    wisp: 9,
    shade: 6,
    dryad: 8,
    aura: 8,
    salamander: 10,
    gnome: 6,
    jinn: 10,
    undine: 6
  },
  priceCoefficient: 540
}
