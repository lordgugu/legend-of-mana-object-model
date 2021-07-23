import { ActiveCard, Card, CardCategory } from 'Cards'
import { Princess } from './Princess'
import { King } from './King'
import { Sorceror } from './Sorceror'
import { Witch } from './Witch'
import { Raven } from './Raven'
import { Clown } from './Clown'
import { Wolf } from './Wolf'
import { Cleric } from './Cleric'

export const UnspecifiedCards: Readonly<{
  Category: CardCategory

  Cleric: ActiveCard
  Clown: ActiveCard
  King: ActiveCard
  Princess: ActiveCard
  Raven: ActiveCard
  Sorceror: ActiveCard
  Witch: ActiveCard
  Wolf: ActiveCard

  All: Card[]
}> = {
  Category: undefined,

  Cleric: Cleric,
  Clown: Clown,
  King: King,
  Princess: Princess,
  Raven: Raven,
  Sorceror: Sorceror,
  Witch: Witch,
  Wolf: Wolf,

  All: [Cleric, Clown, King, Princess, Raven, Sorceror, Witch, Wolf]
}
