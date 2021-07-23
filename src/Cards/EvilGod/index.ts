import { ActiveCard, Card, CardCategory } from 'Cards'
import { BeastHeadedGod } from './BeastHeadedGod'
import { FallenAngel } from './FallenAngel'
import { GodOfDestruction } from './GodOfDestruction'
import { Leviathan } from './Leviathan'
import { LordOfFlies } from './LordOfFlies'
import { LunarWitch } from './LunarWitch'
import { WingsOfDarkness } from './WingsOfDarkness'

export const EvilGodCards: Readonly<{
  Category: CardCategory

  BeastHeadedGod: ActiveCard
  FallenAngel: ActiveCard
  GodOfDestruction: ActiveCard
  Leviathan: ActiveCard
  LordOfFlies: ActiveCard
  LunarWitch: ActiveCard
  WingsOfDarkness: ActiveCard

  All: Card[]
}> = {
  Category: 'Evil God',

  BeastHeadedGod: BeastHeadedGod,
  FallenAngel: FallenAngel,
  GodOfDestruction: GodOfDestruction,
  Leviathan: Leviathan,
  LordOfFlies: LordOfFlies,
  LunarWitch: LunarWitch,
  WingsOfDarkness: WingsOfDarkness,

  All: [BeastHeadedGod, FallenAngel, GodOfDestruction, Leviathan, LordOfFlies, LunarWitch, WingsOfDarkness]
}
