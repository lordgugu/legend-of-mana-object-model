import { Equipment } from 'Equipments'
import { Specials } from 'Specials'

export const Gauntlet: Equipment = {
  id: 'Gauntlet',
  name: 'Gauntlet',
  attributes: {
    strike: 7,
    slash: 6,
    pierce: 8,
    magic: 2
  },
  markerThreshold: 2,
  priceCoefficient: 25,
  compatibleSpecials: [Specials.NoHpRegeneration, Specials.NoReviveMoveHpRegeneration]
}
