import { ActiveCard, Card, CardCategory } from 'Cards'
import { Aura } from './Aura'
import { Dryad } from './Dryad'
import { Gnome } from './Gnome'
import { Jinn } from './Jinn'
import { Salamander } from './Salamander'
import { Shade } from './Shade'
import { Undine } from './Undine'
import { Wisp } from './Wisp'

export const ElementCards: Readonly<{
  Category: CardCategory

  Wisp: ActiveCard
  Shade: ActiveCard
  Dryad: ActiveCard
  Aura: ActiveCard
  Salamander: ActiveCard
  Gnome: ActiveCard
  Jinn: ActiveCard
  Undine: ActiveCard

  All: Card[]
}> = {
  Category: 'Element',

  Wisp: Wisp,
  Shade: Shade,
  Dryad: Dryad,
  Aura: Aura,
  Salamander: Salamander,
  Gnome: Gnome,
  Jinn: Jinn,
  Undine: Undine,

  All: [Wisp, Shade, Dryad, Aura, Salamander, Gnome, Jinn, Undine]
}
