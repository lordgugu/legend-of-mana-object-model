import { ActiveItem, Item, ItemCategory } from 'Items'
import { AuraGold } from './AuraGold'
import { AuraSilver } from './AuraSilver'
import { DryadGold } from './DryadGold'
import { DryadSilver } from './DryadSilver'
import { GnomeGold } from './GnomeGold'
import { GnomeSilver } from './GnomeSilver'
import { JinnGold } from './JinnGold'
import { JinnSilver } from './JinnSilver'
import { SalamanderGold } from './SalamanderGold'
import { SalamanderSilver } from './SalamanderSilver'
import { ShadeGold } from './ShadeGold'
import { ShadeSilver } from './ShadeSilver'
import { UndineGold } from './UndineGold'
import { UndineSilver } from './UndineSilver'
import { WispGold } from './WispGold'
import { WispSilver } from './WispSilver'

export const CoinsItems: Readonly<{
  Category: ItemCategory

  AuraGold: ActiveItem
  AuraSilver: ActiveItem
  DryadGold: ActiveItem
  DryadSilver: ActiveItem
  GnomeGold: ActiveItem
  GnomeSilver: ActiveItem
  JinnGold: ActiveItem
  JinnSilver: ActiveItem
  SalamanderGold: ActiveItem
  SalamanderSilver: ActiveItem
  ShadeGold: ActiveItem
  ShadeSilver: ActiveItem
  UndineGold: ActiveItem
  UndineSilver: ActiveItem
  WispGold: ActiveItem
  WispSilver: ActiveItem

  All: Item[]
}> = {
  Category: 'Coins',

  AuraGold: AuraGold,
  AuraSilver: AuraSilver,
  DryadGold: DryadGold,
  DryadSilver: DryadSilver,
  GnomeGold: GnomeGold,
  GnomeSilver: GnomeSilver,
  JinnGold: JinnGold,
  JinnSilver: JinnSilver,
  SalamanderGold: SalamanderGold,
  SalamanderSilver: SalamanderSilver,
  ShadeGold: ShadeGold,
  ShadeSilver: ShadeSilver,
  UndineGold: UndineGold,
  UndineSilver: UndineSilver,
  WispGold: WispGold,
  WispSilver: WispSilver,

  All: [
    AuraGold,
    AuraSilver,
    DryadGold,
    DryadSilver,
    GnomeGold,
    GnomeSilver,
    JinnGold,
    JinnSilver,
    SalamanderGold,
    SalamanderSilver,
    ShadeGold,
    ShadeSilver,
    UndineGold,
    UndineSilver,
    WispGold,
    WispSilver
  ]
}
