import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'

export const Tower: ActiveCard = {
  id: 'Tower',
  name: 'Tower',
  category: Cards.Stage.Category,
  price: 1500,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.All.forEach((stat) => Stats.widenRange(project, stat, -3, 5))
        break
    }
  }
}
