import { ActiveItem, Item, ItemCategory } from 'Items'
import { ChaosCrystal } from './ChaosCrystal'
import { GlowCrystal } from './GlowCrystal'
import { MoonCrystal } from './MoonCrystal'
import { SunCrystal } from './SunCrystal'

export const MagicCrystalsItems: Readonly<{
  Category: ItemCategory

  ChaosCrystal: ActiveItem
  GlowCrystal: ActiveItem
  MoonCrystal: ActiveItem
  SunCrystal: ActiveItem

  All: Item[]
}> = {
  Category: 'Magic Crystals',

  ChaosCrystal: ChaosCrystal,
  GlowCrystal: GlowCrystal,
  MoonCrystal: MoonCrystal,
  SunCrystal: SunCrystal,

  All: [ChaosCrystal, GlowCrystal, MoonCrystal, SunCrystal]
}
