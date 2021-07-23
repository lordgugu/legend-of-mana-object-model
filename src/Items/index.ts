import { Entity } from 'Common'
import { Project } from 'Forge/Projects'
import { BottlesItems } from './Bottles'
import { CoinsItems } from './Coins'
import { EyesItems } from './Eyes'
import { FangClawItems } from './FangClaw'
import { FeathersItems } from './Feathers'
import { MagicCrystalsItems } from './MagicCrystals'
import { MagicStonesItems } from './MagicStones'
import { MeatsItems } from './Meats'
import { PelletsItems } from './Pellets'
import { PouchItems } from './Pouch'
import { PowdersItems } from './Powders'
import { ProduceItems } from './Produce'
import { SeedsItems } from './Seeds'
import { UnspecifiedItems } from './Unspecified'
import { UrnsItems } from './Urns'
import { VialsItems } from './Vials'

export type ItemCategory =
  | 'Coins'
  | 'Magic Stones'
  | 'Magic Crystals'
  | 'Seeds'
  | 'Produce'
  | 'Meats'
  | 'Fang / Claw'
  | 'Eyes'
  | 'Feathers'
  | 'Bottles'
  | 'Vials'
  | 'Urns'
  | 'Pellets'
  | 'Powders'
  | 'Pouch'
  | undefined

export type Item = Entity & {
  readonly category: ItemCategory
  readonly energy: number
  readonly activate?: (project: Project) => void
}

export type ActiveItem = Item & {
  readonly activate: (project: Project) => void
}

export namespace Items {
  export const Bottles = BottlesItems
  export const Coins = CoinsItems
  export const Eyes = EyesItems
  export const FangClaw = FangClawItems
  export const Feathers = FeathersItems
  export const MagicCrystals = MagicCrystalsItems
  export const MagicStones = MagicStonesItems
  export const Meats = MeatsItems
  export const Pellets = PelletsItems
  export const Pouch = PouchItems
  export const Powders = PowdersItems
  export const Produce = ProduceItems
  export const Seeds = SeedsItems
  export const Urns = UrnsItems
  export const Vials = VialsItems
  export const Unspecified = UnspecifiedItems

  export const All = [
    ...Bottles.All,
    ...Coins.All,
    ...Eyes.All,
    ...FangClaw.All,
    ...Feathers.All,
    ...MagicCrystals.All,
    ...MagicStones.All,
    ...Meats.All,
    ...Pellets.All,
    ...Pouch.All,
    ...Powders.All,
    ...Produce.All,
    ...Seeds.All,
    ...Urns.All,
    ...Vials.All,
    ...Unspecified.All
  ]
}
