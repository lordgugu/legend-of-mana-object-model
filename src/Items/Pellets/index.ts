import { ActiveItem, Item, ItemCategory } from 'Items'
import { BakedRoach } from './BakedRoach'
import { BlackenedBat } from './BlackenedBat'

export const PelletsItems: Readonly<{
  Category: ItemCategory

  BakedRoach: ActiveItem
  BlackenedBat: ActiveItem

  All: Item[]
}> = {
  Category: 'Pellets',

  BakedRoach: BakedRoach,
  BlackenedBat: BlackenedBat,

  All: [BakedRoach, BlackenedBat]
}
