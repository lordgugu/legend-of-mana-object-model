import { Equipment } from 'Equipments'
import { Specials } from 'Specials'

export const Mantle: Equipment = {
  id: 'Mantle',
  name: 'Mantle',
  attributes: {
    strike: 4,
    slash: 4,
    pierce: 4,
    magic: 12
  },
  markerThreshold: 2,
  priceCoefficient: 20,
  compatibleSpecials: [Specials.MoveHpRegeneration, Specials.NoHpRegeneration, Specials.NoReviveMoveHpRegeneration]
}
