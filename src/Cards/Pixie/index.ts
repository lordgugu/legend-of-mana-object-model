import { ActiveCard, Card, CardCategory } from 'Cards'
import { PixieOfEnvy } from './PixieOfEnvy'
import { PixieOfGluttony } from './PixieOfGluttony'
import { PixieOfGreed } from './PixieOfGreed'
import { PixieOfLust } from './PixieOfLust'
import { PixieOfPride } from './PixieOfPride'
import { PixieOfSloth } from './PixieOfSloth'
import { PixieOfWrath } from './PixieOfWrath'

export const PixieCards: Readonly<{
  Category: CardCategory

  PixieOfEnvy: ActiveCard
  PixieOfGluttony: ActiveCard
  PixieOfGreed: ActiveCard
  PixieOfLust: ActiveCard
  PixieOfPride: ActiveCard
  PixieOfSloth: ActiveCard
  PixieOfWrath: ActiveCard

  All: Card[]
}> = {
  Category: 'Pixie',

  PixieOfEnvy: PixieOfEnvy,
  PixieOfGluttony: PixieOfGluttony,
  PixieOfGreed: PixieOfGreed,
  PixieOfLust: PixieOfLust,
  PixieOfPride: PixieOfPride,
  PixieOfSloth: PixieOfSloth,
  PixieOfWrath: PixieOfWrath,

  All: [PixieOfEnvy, PixieOfGluttony, PixieOfGreed, PixieOfLust, PixieOfPride, PixieOfSloth, PixieOfWrath]
}
