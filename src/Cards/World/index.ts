import { ActiveCard, Card, CardCategory } from 'Cards'
import { AncientMoon } from './AncientMoon'
import { DyingEarth } from './DyingEarth'
import { HeavensScale } from './HeavensScale'
import { MirroredWorld } from './MirroredWorld'
import { Ragnarok } from './Ragnarok'
import { Yggdrasil } from './Yggdrasil'

export const WorldCards: Readonly<{
  Category: CardCategory

  AncientMoon: ActiveCard
  DyingEarth: ActiveCard
  HeavensScale: ActiveCard
  MirroredWorld: ActiveCard
  Ragnarok: ActiveCard
  Yggdrasil: ActiveCard

  All: Card[]
}> = {
  Category: 'World',

  AncientMoon: AncientMoon,
  DyingEarth: DyingEarth,
  HeavensScale: HeavensScale,
  MirroredWorld: MirroredWorld,
  Ragnarok: Ragnarok,
  Yggdrasil: Yggdrasil,

  All: [AncientMoon, DyingEarth, HeavensScale, MirroredWorld, Ragnarok, Yggdrasil]
}
