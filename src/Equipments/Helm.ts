import { Equipment } from 'Equipments'
import { Specials } from 'Specials'

export const Helm: Equipment = {
  id: 'Helm',
  name: 'Helm',
  attributes: {
    strike: 8,
    slash: 7,
    pierce: 6,
    magic: 2
  },
  markerThreshold: 2,
  priceCoefficient: 25,
  compatibleSpecials: [Specials.NoHpRegeneration, Specials.NoReviveMoveHpRegeneration]
}
