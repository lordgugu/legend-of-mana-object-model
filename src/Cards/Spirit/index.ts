import { ActiveCard, Card, CardCategory } from 'Cards'
import { SpiritOfForest } from './SpiritOfForest'
import { SpiritOfHousework } from './SpiritOfHousework'
import { SpiritOfMountain } from './SpiritOfMountain'
import { SpiritOfOcean } from './SpiritOfOcean'
import { SpiritOfShoes } from './SpiritOfShoes'

export const SpiritCards: Readonly<{
  Category: CardCategory

  SpiritOfForest: ActiveCard
  SpiritOfHousework: ActiveCard
  SpiritOfMountain: ActiveCard
  SpiritOfShoes: ActiveCard
  SpiritOfOcean: ActiveCard

  All: Card[]
}> = {
  Category: 'Spirit',

  SpiritOfForest: SpiritOfForest,
  SpiritOfHousework: SpiritOfHousework,
  SpiritOfMountain: SpiritOfMountain,
  SpiritOfShoes: SpiritOfShoes,
  SpiritOfOcean: SpiritOfOcean,

  All: [SpiritOfForest, SpiritOfHousework, SpiritOfMountain, SpiritOfShoes, SpiritOfOcean]
}
