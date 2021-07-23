import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Equipments } from 'Equipments'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'

export const SacrificedNymph: ActiveCard = {
  id: 'SacrificedNymph',
  name: 'Sacrificed Nymph',
  category: Cards.Maiden.Category,
  price: 1000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        if (project.type === Projects.Equipment && project.gear === Equipments.Pendant) {
          Immunities.add(project, Immunities.Petrification)
        }

        break
    }
  }
}
