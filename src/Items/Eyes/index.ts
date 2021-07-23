import { ActiveItem, Item, ItemCategory } from 'Items'
import { AngryEye } from './AngryEye'
import { BlankEye } from './BlankEye'
import { CreepyEye } from './CreepyEye'
import { DangerousEye } from './DangerousEye'
import { LittleEye } from './LittleEye'
import { SillyEye } from './SillyEye'
import { SleepyEye } from './SleepyEye'
import { WickedEye } from './WickedEye'

export const EyesItems: Readonly<{
  Category: ItemCategory

  AngryEye: ActiveItem
  BlankEye: ActiveItem
  CreepyEye: ActiveItem
  DangerousEye: ActiveItem
  LittleEye: ActiveItem
  SillyEye: ActiveItem
  SleepyEye: ActiveItem
  WickedEye: ActiveItem

  All: Item[]
}> = {
  Category: 'Eyes',

  AngryEye: AngryEye,
  BlankEye: BlankEye,
  CreepyEye: CreepyEye,
  DangerousEye: DangerousEye,
  LittleEye: LittleEye,
  SillyEye: SillyEye,
  SleepyEye: SleepyEye,
  WickedEye: WickedEye,

  All: [AngryEye, BlankEye, CreepyEye, DangerousEye, LittleEye, SillyEye, SleepyEye, WickedEye]
}
