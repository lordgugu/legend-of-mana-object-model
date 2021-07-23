import { ActiveItem, Item, ItemCategory } from 'Items'
import { DamselsSigh } from './DamselsSigh'
import { DragonsBreath } from './DragonsBreath'
import { GhostsHowl } from './GhostsHowl'
import { Mercury } from './Mercury'
import { StinkyBreath } from './StinkyBreath'

export const VialsItems: Readonly<{
  Category: ItemCategory

  DamselsSigh: ActiveItem
  DragonsBreath: ActiveItem
  GhostsHowl: ActiveItem
  Mercury: ActiveItem
  StinkyBreath: ActiveItem

  All: Item[]
}> = {
  Category: 'Vials',

  DamselsSigh: DamselsSigh,
  DragonsBreath: DragonsBreath,
  GhostsHowl: GhostsHowl,
  Mercury: Mercury,
  StinkyBreath: StinkyBreath,

  All: [DamselsSigh, DragonsBreath, GhostsHowl, Mercury, StinkyBreath]
}
