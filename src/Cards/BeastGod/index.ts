import { ActiveCard, Card, CardCategory } from 'Cards'
import { Narwhal } from './Narwhal'
import { Phoenix } from './Phoenix'

export const BeastGodCards: Readonly<{
  Category: CardCategory

  Narwhal: ActiveCard
  Phoenix: ActiveCard

  All: Card[]
}> = {
  Category: 'Beast God',

  Narwhal: Narwhal,
  Phoenix: Phoenix,

  All: [Narwhal, Phoenix]
}
