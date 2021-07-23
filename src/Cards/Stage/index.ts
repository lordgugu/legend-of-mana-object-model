import { ActiveCard, Card, CardCategory } from 'Cards'
import { BedOfThorns } from './BedOfThorns'
import { Metropolis } from './Metropolis'
import { Spring } from './Spring'
import { Tower } from './Tower'
import { Volcano } from './Volcano'

export const StageCards: Readonly<{
  Category: CardCategory

  BedOfThorns: ActiveCard
  Metropolis: ActiveCard
  Spring: ActiveCard
  Volcano: ActiveCard
  Tower: ActiveCard

  All: Card[]
}> = {
  Category: 'Stage',

  BedOfThorns: BedOfThorns,
  Metropolis: Metropolis,
  Spring: Spring,
  Volcano: Volcano,
  Tower: Tower,

  All: [BedOfThorns, Metropolis, Spring, Volcano, Tower]
}
