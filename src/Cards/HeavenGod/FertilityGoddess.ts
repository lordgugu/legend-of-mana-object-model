import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Equipments } from 'Equipments'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { Specials } from 'Specials'

export const FertilityGoddess: ActiveCard = {
  id: 'FertilityGoddess',
  name: 'Fertility Goddess',
  category: Cards.HeavenGod.Category,
  price: 3000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.widenRange(project, Stats.Constitution, -5, 10)
        Stats.setMinimum(project, Stats.Constitution, 10)

        if (project.type === Projects.Equipment) {
          Immunities.add(project, Immunities.Petrification)

          if (project.gear === Equipments.Ring) {
            project.special = Specials.ShareExperience
          }
        }
        break
    }
  }
}
