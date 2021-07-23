import { Entity } from 'Common'
import { Project } from 'Forge/Projects'
import { BeastGodCards } from './BeastGod'
import { ElementCards } from './Element'
import { EvilGodCards } from './EvilGod'
import { HeavenGodCards } from './HeavenGod'
import { MaidenCards } from './Maiden'
import { NobleCards } from './Noble'
import { PixieCards } from './Pixie'
import { SpiritCards } from './Spirit'
import { StageCards } from './Stage'
import { UnspecifiedCards } from './Unspecified'
import { WorldCards } from './World'

export type CardCategory =
  | 'World'
  | 'Stage'
  | 'Heaven God'
  | 'Evil God'
  | 'Noble'
  | 'Maiden'
  | 'Spirit'
  | 'Pixie'
  | 'Beast God'
  | 'Element'
  | undefined

export type Card = Entity & {
  readonly category: CardCategory
  readonly price: number
  readonly activate?: (project: Project, slot: CardSlot) => void
}

export type ActiveCard = Card & {
  readonly activate: (project: Project, slot: CardSlot) => void
}

export type CardSlot = 'pending' | 'hidden' | 'top' | 'middle' | 'bottom' | 'leaving'

export type CardContext = {
  sticky: boolean
  cards: { [slot in CardSlot]?: Card }
  worldPower?: Card
}

function _resetVolatileCards(context: CardContext) {
  context.sticky = true
  context.cards.pending = undefined
  context.cards.leaving = undefined
}

function _resolveWorldPower(context: CardContext) {
  const { bottom, middle, top, hidden } = context.cards

  context.worldPower = Array.of(bottom, middle, top, hidden).find(
    (card) => card === Cards.Stage.BedOfThorns || card?.category === Cards.World.Category
  )
}

function _pushCards(context: CardContext) {
  const { sticky } = context
  const { pending, hidden, top, middle, bottom } = context.cards

  // pending: [Empty] => [Empty]
  // hidden:  [?????] => [?????]
  // top:     [?????] => [?????]
  // middle:  [?????] => [?????]
  // bottom:  [?????] => [?????]
  // leaving: [?????] => [?????]
  if (pending === undefined) {
    return
  }

  // pending: [CardA] => [CardA]
  // hidden:  [Empty] => [CardA]
  // top:     [?????] => [?????]
  // middle:  [?????] => [?????]
  // bottom:  [?????] => [?????]
  // leaving: [?????] => [?????]
  if (hidden == undefined) {
    context.cards.hidden = pending
    return
  }

  // pending: [CardA] => [CardA]
  // hidden:  [CardB] => [CardA]
  // top:     [Empty] => [CardB]
  // middle:  [?????] => [?????]
  // bottom:  [?????] => [?????]
  // leaving: [?????] => [?????]
  if (top === undefined) {
    context.cards.top = hidden
    context.cards.hidden = pending
    return
  }

  // pending: [CardA] => [CardA]
  // hidden:  [CardB] => [CardA]
  // top:     [CardC] => [CardB]
  // middle:  [Empty] => [CardC]
  // bottom:  [?????] => [?????]
  // leaving: [?????] => [?????]
  if (middle === undefined) {
    context.cards.middle = top
    context.cards.top = hidden
    context.cards.hidden = pending
    return
  }

  // pending: [CardA] => [CardA]
  // hidden:  [CardB] => [CardA]
  // top:     [CardC] => [CardB]
  // middle:  [CardD] => [CardC]
  // bottom:  [Empty] => [CardD]
  // leaving: [?????] => [?????]
  if (bottom === undefined) {
    context.cards.bottom = middle
    context.cards.middle = top
    context.cards.top = hidden
    context.cards.hidden = pending
    return
  }

  // pending: [CardA] => [CardA]
  // hidden:  [CardB] => [CardA]
  // top:     [CardC] => [CardB]
  // middle:  [CardD] => [CardC]
  // bottom:  [CardE] => [CardD]
  // leaving: [?????] => [CardE]
  // Only bottom-most Pixie cards prevent pushing
  if (!sticky || bottom.category !== Cards.Pixie.Category) {
    context.cards.leaving = bottom
    context.cards.bottom = middle
    context.cards.middle = top
    context.cards.top = hidden
    context.cards.hidden = pending
    return
  }

  // pending: [CardA] => [CardA]
  // hidden:  [CardB] => [CardA]
  // top:     [CardC] => [CardB]
  // middle:  [CardD] => [CardC]
  // bottom:  [Pixie] => [Pixie]
  // leaving: [?????] => [CardD]
  if (middle.category !== Cards.Pixie.Category) {
    context.cards.leaving = middle
    context.cards.middle = top
    context.cards.top = hidden
    context.cards.hidden = pending
    return
  }

  // pending: [CardA] => [CardA]
  // hidden:  [CardB] => [CardA]
  // top:     [CardC] => [CardB]
  // middle:  [Pixie] => [Pixie]
  // bottom:  [Pixie] => [Pixie]
  // leaving: [?????] => [CardC]
  if (top.category !== Cards.Pixie.Category) {
    context.cards.leaving = top
    context.cards.top = hidden
    context.cards.hidden = pending
    return
  }

  // pending: [CardA] => [CardA]
  // hidden:  [CardB] => [CardA]
  // top:     [Pixie] => [Pixie]
  // middle:  [Pixie] => [Pixie]
  // bottom:  [Pixie] => [Pixie]
  // leaving: [?????] => [CardB]
  context.cards.leaving = hidden
  context.cards.hidden = pending
}

export namespace Cards {
  export const pushCards: (context: CardContext) => void = _pushCards
  export const resetVolatileCards: (context: CardContext) => void = _resetVolatileCards
  export const resolveWorldPower: (context: CardContext) => void = _resolveWorldPower

  export const Pending: CardSlot = 'pending'
  export const Hidden: CardSlot = 'hidden'
  export const Top: CardSlot = 'top'
  export const Middle: CardSlot = 'middle'
  export const Bottom: CardSlot = 'bottom'
  export const Leaving: CardSlot = 'leaving'

  export const BeastGod = BeastGodCards
  export const Element = ElementCards
  export const EvilGod = EvilGodCards
  export const HeavenGod = HeavenGodCards
  export const Maiden = MaidenCards
  export const Noble = NobleCards
  export const Pixie = PixieCards
  export const Spirit = SpiritCards
  export const Stage = StageCards
  export const World = WorldCards
  export const Unspecified = UnspecifiedCards

  export const All = [
    ...BeastGod.All,
    ...Element.All,
    ...EvilGod.All,
    ...HeavenGod.All,
    ...Maiden.All,
    ...Noble.All,
    ...Pixie.All,
    ...Spirit.All,
    ...Stage.All,
    ...World.All,
    ...Unspecified.All
  ]
}
