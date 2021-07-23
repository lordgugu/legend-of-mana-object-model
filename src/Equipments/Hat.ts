import { Equipment } from 'Equipments'
import { Specials } from 'Specials'

export const Hat: Equipment = {
  id: 'Hat',
  name: 'Hat',
  attributes: {
    strike: 4,
    slash: 2,
    pierce: 2,
    magic: 4
  },
  markerThreshold: 2,
  priceCoefficient: 15,
  compatibleSpecials: [Specials.NoHpRegeneration, Specials.NoReviveMoveHpRegeneration]
}
