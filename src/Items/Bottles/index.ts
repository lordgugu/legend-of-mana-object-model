export * from './Acid'
export * from './AromaOil'
export * from './DragonBlood'
export * from './Ether'
export * from './HolyWater'
import { ActiveItem, Item, ItemCategory } from 'Items'
import { Acid } from './Acid'
import { AromaOil } from './AromaOil'
import { DragonBlood } from './DragonBlood'
import { Ether } from './Ether'
import { HolyWater } from './HolyWater'

export const BottlesItems: Readonly<{
  Category: ItemCategory

  Acid: Item
  AromaOil: ActiveItem
  DragonBlood: ActiveItem
  Ether: ActiveItem
  HolyWater: ActiveItem

  All: Item[]
}> = {
  Category: 'Bottles',

  Acid: Acid,
  AromaOil: AromaOil,
  DragonBlood: DragonBlood,
  Ether: Ether,
  HolyWater: HolyWater,

  All: [Acid, AromaOil, DragonBlood, Ether, HolyWater]
}
