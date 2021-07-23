import { ActiveItem, Item, ItemCategory } from 'Items'
import { GiantsHorn } from './GiantsHorn'
import { HealingClaw } from './HealingClaw'
import { PoisonFang } from './PoisonFang'
import { Scissors } from './Scissors'
import { SharpClaw } from './SharpClaw'
import { VampireFang } from './VampireFang'
import { ZombieClaw } from './ZombieClaw'

export const FangClawItems: Readonly<{
  Category: ItemCategory

  GiantsHorn: ActiveItem
  HealingClaw: ActiveItem
  PoisonFang: ActiveItem
  Scissors: ActiveItem
  SharpClaw: ActiveItem
  VampireFang: ActiveItem
  ZombieClaw: ActiveItem

  All: Item[]
}> = {
  Category: 'Fang / Claw',

  GiantsHorn: GiantsHorn,
  HealingClaw: HealingClaw,
  PoisonFang: PoisonFang,
  Scissors: Scissors,
  SharpClaw: SharpClaw,
  VampireFang: VampireFang,
  ZombieClaw: ZombieClaw,

  All: [GiantsHorn, HealingClaw, PoisonFang, Scissors, SharpClaw, VampireFang, ZombieClaw]
}
