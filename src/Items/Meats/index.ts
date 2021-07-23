import { Item, ItemCategory } from 'Items'
import { AnimalMeat } from './AnimalMeat'
import { BirdMeat } from './BirdMeat'
import { BugMeat } from './BugMeat'
import { DemonMeat } from './DemonMeat'
import { DragonSteak } from './DragonSteak'
import { FishMeat } from './FishMeat'
import { LizardMeat } from './LizardMeat'
import { MagicalMeat } from './MagicalMeat'
import { MorphMeat } from './MorphMeat'
import { OddMeat } from './OddMeat'
import { RottenMeat } from './RottenMeat'

export const MeatsItems: Readonly<{
  Category: ItemCategory

  AnimalMeat: Item
  BirdMeat: Item
  BugMeat: Item
  DemonMeat: Item
  DragonSteak: Item
  FishMeat: Item
  LizardMeat: Item
  MagicalMeat: Item
  MorphMeat: Item
  OddMeat: Item
  RottenMeat: Item

  All: Item[]
}> = {
  Category: 'Meats',

  AnimalMeat: AnimalMeat,
  BirdMeat: BirdMeat,
  BugMeat: BugMeat,
  DemonMeat: DemonMeat,
  DragonSteak: DragonSteak,
  FishMeat: FishMeat,
  LizardMeat: LizardMeat,
  MagicalMeat: MagicalMeat,
  MorphMeat: MorphMeat,
  OddMeat: OddMeat,
  RottenMeat: RottenMeat,

  All: [
    AnimalMeat,
    BirdMeat,
    BugMeat,
    DemonMeat,
    DragonSteak,
    FishMeat,
    LizardMeat,
    MagicalMeat,
    MorphMeat,
    OddMeat,
    RottenMeat
  ]
}
