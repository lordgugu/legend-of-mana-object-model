import { Equipment } from 'Equipments'
import { Specials } from 'Specials'

export const Shield: Equipment = {
  id: 'Shield',
  name: 'Shield',
  attributes: {
    strike: 8,
    slash: 8,
    pierce: 8,
    magic: 4
  },
  markerThreshold: 1,
  priceCoefficient: 10,
  compatibleSpecials: [Specials.NoHpRegeneration, Specials.NoReviveMoveHpRegeneration, Specials.StareImmunity]
}
