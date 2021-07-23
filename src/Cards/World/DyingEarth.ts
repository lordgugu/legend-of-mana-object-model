import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'

export const DyingEarth: ActiveCard = {
  id: 'DyingEarth',
  name: 'Dying Earth',
  category: Cards.World.Category,
  price: 2600,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Hidden:
        const { worldPower } = project

        if (worldPower !== undefined && worldPower !== Cards.Stage.BedOfThorns) {
          project.cards.hidden = undefined
        }

        break
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        const { top, middle, bottom } = project.cards

        Stats.All.forEach((stat) => Stats.widenRange(project, stat, -5, 12))

        if (!Array.of(top, middle, bottom).includes(Cards.Maiden.EnticedNymph)) {
          Stats.All.forEach((stat) => Stats.decrement(project, stat))
        }

        break
    }
  }
}
