import { Equipment } from 'Equipments'
import { Specials } from 'Specials'

export const Robe: Equipment = {
  id: 'Robe',
  name: 'Robe',
  attributes: {
    strike: 6,
    slash: 6,
    pierce: 6,
    magic: 8
  },
  markerThreshold: 2,
  priceCoefficient: 30,
  compatibleSpecials: [Specials.NoHpRegeneration, Specials.NoReviveMoveHpRegeneration]
}
