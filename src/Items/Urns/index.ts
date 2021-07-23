import { ActiveItem, Item, ItemCategory } from 'Items'
import { EarOfWheat } from './EarOfWheat'
import { Electricity } from './Electricity'
import { Moss } from './Moss'

export const UrnsItems: Readonly<{
  Category: ItemCategory

  EarOfWheat: ActiveItem
  Electricity: ActiveItem
  Moss: ActiveItem

  All: Item[]
}> = {
  Category: 'Urns',

  EarOfWheat: EarOfWheat,
  Electricity: Electricity,
  Moss: Moss,

  All: [EarOfWheat, Electricity, Moss]
}
