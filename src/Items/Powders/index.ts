import { ActiveItem, Item, ItemCategory } from 'Items'
import { Ash } from './Ash'
import { GraveDirt } from './GraveDirt'
import { KnockoutDust } from './KnockoutDust'
import { PoisonPowder } from './PoisonPowder'
import { Rust } from './Rust'
import { SleepyPowder } from './SleepyPowder'
import { Sulfur } from './Sulfur'

export const PowdersItems: Readonly<{
  Category: ItemCategory

  Ash: ActiveItem
  GraveDirt: ActiveItem
  KnockoutDust: ActiveItem
  PoisonPowder: ActiveItem
  Rust: ActiveItem
  SleepyPowder: ActiveItem
  Sulfur: ActiveItem

  All: Item[]
}> = {
  Category: 'Powders',

  Ash: Ash,
  GraveDirt: GraveDirt,
  KnockoutDust: KnockoutDust,
  PoisonPowder: PoisonPowder,
  Rust: Rust,
  SleepyPowder: SleepyPowder,
  Sulfur: Sulfur,

  All: [Ash, GraveDirt, KnockoutDust, PoisonPowder, Rust, SleepyPowder, Sulfur]
}
