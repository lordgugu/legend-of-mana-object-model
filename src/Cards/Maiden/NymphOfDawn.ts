import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project } from 'Forge/Projects'

export const NymphOfDawn: ActiveCard = {
  id: 'NymphOfDawn',
  name: 'Nymph of Dawn',
  category: Cards.Maiden.Category,
  price: 1000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Middle:
      case Cards.Bottom:
        const { energy } = project

        if (energy <= 24) {
          project.cards[slot] = undefined
          project.energy += 192
        }

        break
      case Cards.Leaving:
        project.energy += 192

        break
    }
  }
}
