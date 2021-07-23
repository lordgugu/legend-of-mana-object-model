import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'

export const Raven: ActiveCard = {
  id: 'Raven',
  name: 'Raven',
  category: Cards.Unspecified.Category,
  price: 300,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.widenRange(project, Stats.Magic, -3, 5)
        Stats.widenRange(project, Stats.Charm, -3, 5)

        Stats.setMinimum(project, Stats.Magic, 3)
        Stats.setMinimum(project, Stats.Charm, 3)

        break
    }
  }
}
