import { ActiveCard, Card, CardCategory } from 'Cards'
import { EnticedNymph } from './EnticedNymph'
import { NymphOfDawn } from './NymphOfDawn'
import { NymphOfOrchards } from './NymphOfOrchards'
import { SacrificedNymph } from './SacrificedNymph'
import { Valkyrie } from './Valkyrie'

export const MaidenCards: Readonly<{
  Category: CardCategory

  EnticedNymph: Card
  NymphOfDawn: ActiveCard
  NymphOfOrchards: ActiveCard
  Valkyrie: ActiveCard
  SacrificedNymph: ActiveCard

  All: Card[]
}> = {
  Category: 'Maiden',

  EnticedNymph: EnticedNymph,
  NymphOfDawn: NymphOfDawn,
  NymphOfOrchards: NymphOfOrchards,
  Valkyrie: Valkyrie,
  SacrificedNymph: SacrificedNymph,

  All: [EnticedNymph, NymphOfDawn, NymphOfOrchards, Valkyrie, SacrificedNymph]
}
