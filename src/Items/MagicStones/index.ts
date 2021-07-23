import { ActiveItem, Item, ItemCategory } from 'Items'
import { Earthstone } from './Earthstone'
import { Firestone } from './Firestone'
import { Waterstone } from './Waterstone'
import { Windstone } from './Windstone'

export const MagicStonesItems: Readonly<{
  Category: ItemCategory

  Earthstone: ActiveItem
  Firestone: ActiveItem
  Waterstone: ActiveItem
  Windstone: ActiveItem

  All: Item[]
}> = {
  Category: 'Magic Stones',

  Earthstone: Earthstone,
  Firestone: Firestone,
  Waterstone: Waterstone,
  Windstone: Windstone,

  All: [Earthstone, Firestone, Waterstone, Windstone]
}
