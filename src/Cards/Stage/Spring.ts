import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Equipments } from 'Equipments'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'

export const Spring: ActiveCard = {
  id: 'Spring',
  name: 'Spring',
  category: Cards.Stage.Category,
  price: 1500,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.All.forEach((stat) => Stats.widenRange(project, stat, -3, 5))

        if (project.type === Projects.Equipment) {
          switch (project.gear) {
            case Equipments.Robe:
              Immunities.add(project, Immunities.Flameburst)
              break
            case Equipments.Pendant:
              Immunities.add(project, Immunities.Sleep)
              break
          }
        }

        break
    }
  }
}
