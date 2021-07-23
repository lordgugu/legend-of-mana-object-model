import { ActiveItem, Item, ItemCategory } from 'Items'
import { AngelFeather } from './AngelFeather'
import { ClearFeather } from './ClearFeather'
import { FlamingQuill } from './FlamingQuill'
import { MothWing } from './MothWing'
import { RavenFeather } from './RavenFeather'
import { WhiteFeather } from './WhiteFeather'

export const FeathersItems: Readonly<{
  Category: ItemCategory

  AngelFeather: ActiveItem
  ClearFeather: ActiveItem
  FlamingQuill: ActiveItem
  MothWing: ActiveItem
  RavenFeather: ActiveItem
  WhiteFeather: ActiveItem

  All: Item[]
}> = {
  Category: 'Feathers',

  AngelFeather: AngelFeather,
  ClearFeather: ClearFeather,
  FlamingQuill: FlamingQuill,
  MothWing: MothWing,
  RavenFeather: RavenFeather,
  WhiteFeather: WhiteFeather,

  All: [AngelFeather, ClearFeather, FlamingQuill, MothWing, RavenFeather, WhiteFeather]
}
