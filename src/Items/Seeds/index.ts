import { ActiveItem, Item, ItemCategory } from 'Items'
import { BigSeed } from './BigSeed'
import { CrookedSeed } from './CrookedSeed'
import { FlatSeed } from './FlatSeed'
import { LongSeed } from './LongSeed'
import { OblongSeed } from './OblongSeed'
import { RoundSeed } from './RoundSeed'
import { SmallSeed } from './SmallSeed'
import { SpinySeed } from './SpinySeed'

export const SeedsItems: Readonly<{
  Category: ItemCategory

  BigSeed: ActiveItem
  CrookedSeed: ActiveItem
  FlatSeed: ActiveItem
  LongSeed: ActiveItem
  OblongSeed: ActiveItem
  RoundSeed: ActiveItem
  SmallSeed: ActiveItem
  SpinySeed: ActiveItem

  All: Item[]
}> = {
  Category: 'Seeds',

  BigSeed: BigSeed,
  CrookedSeed: CrookedSeed,
  FlatSeed: FlatSeed,
  LongSeed: LongSeed,
  OblongSeed: OblongSeed,
  RoundSeed: RoundSeed,
  SmallSeed: SmallSeed,
  SpinySeed: SpinySeed,

  All: [BigSeed, CrookedSeed, FlatSeed, LongSeed, OblongSeed, RoundSeed, SmallSeed, SpinySeed]
}
