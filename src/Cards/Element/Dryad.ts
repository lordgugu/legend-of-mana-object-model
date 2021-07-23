import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'

export const Dryad: ActiveCard = {
  id: 'Dryad',
  name: 'Dryad',
  category: Cards.Element.Category,
  price: 250,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.increment(project, Stats.Constitution)
        Essences.taint(project, Essences.Dryad)
        break
    }
  }
}
