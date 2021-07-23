import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'

export const Witch: ActiveCard = {
  id: 'Witch',
  name: 'Witch',
  category: Cards.Unspecified.Category,
  price: 300,
  activate: (project: Project, slot: CardSlot) => {
    const { top, middle, bottom } = project.cards

    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        if (Array.of(top, middle, bottom).includes(Cards.Stage.Tower)) {
          Stats.All.forEach((stat) => Stats.widenRange(project, stat, -3, 5))

          Stats.increment(project, Stats.Magic)
          Stats.increment(project, Stats.Spirit)
          Stats.increment(project, Stats.Charm)

          Essences.resistance50Percent(project, Essences.Shade)
          Essences.resistance50Percent(project, Essences.Aura)
          Essences.resistance50Percent(project, Essences.Jinn)
          Essences.resistance50Percent(project, Essences.Undine)
        } else {
          Stats.All.forEach((stat) => Stats.widenRange(project, stat, -1, 3))

          Stats.increment(project, Stats.Magic)

          Essences.resistance75Percent(project, Essences.Shade)
          Essences.resistance75Percent(project, Essences.Aura)
          Essences.resistance75Percent(project, Essences.Jinn)
          Essences.resistance75Percent(project, Essences.Undine)
        }
        break
    }
  }
}
