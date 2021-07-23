import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Equipments } from 'Equipments'
import { Gear } from 'Forge/Gear'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'

export const Metropolis: ActiveCard = {
  id: 'Metropolis',
  name: 'Metropolis',
  category: Cards.Stage.Category,
  price: 1500,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        if (project.type === Projects.Equipment) {
          if (project.gear === Equipments.Robe) {
            Gear.equipment150Percent(project, Gear.Magic)
            Immunities.add(project, Immunities.Confusion)
          } else {
            Gear.equipment125Percent(project, Gear.Magic)
          }
        }
        break
    }
  }
}
