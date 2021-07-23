import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'

export const Shade: ActiveCard = {
  id: 'Shade',
  name: 'Shade',
  category: Cards.Element.Category,
  price: 250,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.increment(project, Stats.Spirit)
        Essences.taint(project, Essences.Shade)
        break
    }
  }
}
