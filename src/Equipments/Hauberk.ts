import { Equipment } from 'Equipments'
import { Specials } from 'Specials'

export const Hauberk: Equipment = {
  id: 'Hauberk',
  name: 'Hauberk',
  attributes: {
    strike: 12,
    slash: 16,
    pierce: 16,
    magic: 2
  },
  markerThreshold: 2,
  priceCoefficient: 60,
  compatibleSpecials: [Specials.NoHpRegeneration, Specials.NoReviveMoveHpRegeneration]
}
