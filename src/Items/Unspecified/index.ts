import { ActiveItem, Item, ItemCategory } from 'Items'
import { GreenballBun } from './GreenballBun'
import { TakoBug } from './TakoBug'

export const UnspecifiedItems: Readonly<{
  Category: ItemCategory

  GreenballBun: ActiveItem
  TakoBug: ActiveItem

  All: Item[]
}> = {
  Category: undefined,

  GreenballBun: GreenballBun,
  TakoBug: TakoBug,

  All: [GreenballBun, TakoBug]
}
