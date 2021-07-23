import { Equipment } from 'Equipments'
import { Specials } from 'Specials'

export const Armor: Equipment = {
  id: 'Armor',
  name: 'Armor',
  attributes: {
    strike: 26,
    slash: 26,
    pierce: 26,
    magic: 4
  },
  markerThreshold: 3,
  priceCoefficient: 75,
  compatibleSpecials: [Specials.NoHpRegeneration, Specials.NoReviveMoveHpRegeneration]
}
