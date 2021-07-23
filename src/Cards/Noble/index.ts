import { ActiveCard, Card, CardCategory } from 'Cards'
import { ManOfValor } from './ManOfValor'
import { Sage } from './Sage'
import { Wanderer } from './Wanderer'

export const NobleCards: Readonly<{
  Category: CardCategory

  ManOfValor: ActiveCard
  Sage: ActiveCard
  Wanderer: ActiveCard

  All: Card[]
}> = {
  Category: 'Noble',

  ManOfValor: ManOfValor,
  Sage: Sage,
  Wanderer: Wanderer,

  All: [ManOfValor, Sage, Wanderer]
}
