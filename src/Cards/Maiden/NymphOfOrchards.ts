import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Equipments } from 'Equipments'
import { Project, Projects } from 'Forge/Projects'
import { Specials } from 'Specials'

export const NymphOfOrchards: ActiveCard = {
  id: 'NymphOfOrchards',
  name: 'Nymph of Orchards',
  category: Cards.Maiden.Category,
  price: 1000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        if (project.type === Projects.Equipment && project.gear === Equipments.Ring) {
          project.special = Specials.FastRevive
        }

        break
    }
  }
}
