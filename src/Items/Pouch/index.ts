import { ActiveItem, Item, ItemCategory } from 'Items'
import { Hairball } from './Hairball'
import { MessyScroll } from './MessyScroll'
import { MirrorPiece } from './MirrorPiece'
import { Needle } from './Needle'
import { WadOfWool } from './WadOfWool'

export const PouchItems: Readonly<{
  Category: ItemCategory

  Hairball: ActiveItem
  MessyScroll: ActiveItem
  MirrorPiece: ActiveItem
  Needle: ActiveItem
  WadOfWool: ActiveItem

  All: Item[]
}> = {
  Category: 'Pouch',

  Hairball: Hairball,
  MessyScroll: MessyScroll,
  MirrorPiece: MirrorPiece,
  Needle: Needle,
  WadOfWool: WadOfWool,

  All: [Hairball, MessyScroll, MirrorPiece, Needle, WadOfWool]
}
