import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'

export const Aura: ActiveCard = {
  id: 'Aura',
  name: 'Aura',
  category: Cards.Element.Category,
  price: 250,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.increment(project, Stats.Luck)
        Essences.taint(project, Essences.Aura)
        break
    }
  }
}
