import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'

export const Wisp: ActiveCard = {
  id: 'Wisp',
  name: 'Wisp',
  category: Cards.Element.Category,
  price: 250,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.increment(project, Stats.Charm)
        Essences.taint(project, Essences.Wisp)
        break
    }
  }
}
