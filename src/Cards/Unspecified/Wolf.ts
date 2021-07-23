import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'

export const Wolf: ActiveCard = {
  id: 'Wolf',
  name: 'Wolf',
  category: Cards.Unspecified.Category,
  price: 300,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.widenRange(project, Stats.Skill, -3, 5)
        Stats.widenRange(project, Stats.Constitution, -3, 5)

        Stats.setMinimum(project, Stats.Skill, 3)
        Stats.setMinimum(project, Stats.Constitution, 3)

        break
    }
  }
}
