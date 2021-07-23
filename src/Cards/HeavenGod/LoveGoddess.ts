import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Equipments } from 'Equipments'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { Specials } from 'Specials'

export const LoveGoddess: ActiveCard = {
  id: 'LoveGoddess',
  originalName: 'Goddess of Love',
  remasteredName: 'Love Goddess',
  category: Cards.HeavenGod.Category,
  price: 3000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.widenRange(project, Stats.Spirit, -3, 9)
        Stats.widenRange(project, Stats.Charm, -3, 9)

        Stats.setMinimum(project, Stats.Spirit, 7)
        Stats.setMinimum(project, Stats.Charm, 7)

        if (project.type === Projects.Equipment && project.gear === Equipments.Pendant) {
          project.special = Specials.ExtraLucre
        }

        break
    }
  }
}
