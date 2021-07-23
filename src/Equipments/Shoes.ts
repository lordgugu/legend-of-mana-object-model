import { Equipment } from 'Equipments'
import { Specials } from 'Specials'

export const Shoes: Equipment = {
  id: 'Shoes',
  name: 'Shoes',
  attributes: {
    strike: 2,
    slash: 4,
    pierce: 2,
    magic: 4
  },
  markerThreshold: 2,
  priceCoefficient: 10,
  compatibleSpecials: [Specials.ExtraExperience, Specials.NoHpRegeneration, Specials.NoReviveMoveHpRegeneration]
}
