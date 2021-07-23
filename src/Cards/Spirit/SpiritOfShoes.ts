import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Equipments } from 'Equipments'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { Specials } from 'Specials'

export const SpiritOfShoes: ActiveCard = {
  id: 'SpiritOfShoes',
  name: 'Spirit (of Shoes)',
  category: Cards.Spirit.Category,
  price: 800,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.increment(project, Stats.Skill)

        if (project.type === Projects.Equipment) {
          switch (project.gear) {
            case Equipments.Boots:
              Immunities.add(project, Immunities.Paralysis)
              break
            case Equipments.Shoes:
              project.special = Specials.ExtraExperience
              break
          }
        }
        break
    }
  }
}
