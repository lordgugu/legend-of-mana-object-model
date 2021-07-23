import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Equipments } from 'Equipments'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'

export const SpiritOfOcean: ActiveCard = {
  id: 'SpiritOfOcean',
  name: 'Spirit (of Ocean)',
  category: Cards.Spirit.Category,
  price: 800,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.increment(project, Stats.Charm)

        if (project.type === Projects.Equipment && project.gear === Equipments.Hat) {
          Immunities.add(project, Immunities.Confusion)
        }
        break
    }
  }
}
