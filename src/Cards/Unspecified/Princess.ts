import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'

export const Princess: ActiveCard = {
  id: 'Princess',
  name: 'Princess',
  category: Cards.Unspecified.Category,
  price: 1500,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        const { top, middle, bottom } = project.cards

        if (Array.of(top, middle, bottom).includes(Cards.Stage.Metropolis)) {
          Stats.All.forEach((stat) => Stats.widenRange(project, stat, -3, 5))
        } else {
          Stats.All.forEach((stat) => Stats.widenRange(project, stat, -1, 3))
        }

        Stats.increment(project, Stats.Defense)
        break
    }
  }
}
