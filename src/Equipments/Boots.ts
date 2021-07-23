import { Equipment } from 'Equipments'
import { Specials } from 'Specials'

export const Boots: Equipment = {
  id: 'Boots',
  name: 'Boots',
  attributes: {
    strike: 6,
    slash: 8,
    pierce: 7,
    magic: 2
  },
  markerThreshold: 2,
  priceCoefficient: 25,
  compatibleSpecials: [Specials.NoHpRegeneration, Specials.NoReviveMoveHpRegeneration]
}
