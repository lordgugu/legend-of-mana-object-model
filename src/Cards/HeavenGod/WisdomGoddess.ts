import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Equipments } from 'Equipments'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { Specials } from 'Specials'

export const WisdomGoddess: ActiveCard = {
  id: 'WisdomGoddess',
  name: 'Wisdom Goddess',
  category: Cards.HeavenGod.Category,
  price: 3000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.widenRange(project, Stats.Magic, -5, 10)
        Stats.setMinimum(project, Stats.Magic, 10)

        if (project.type === Projects.Equipment && project.gear === Equipments.Shield) {
          project.special = Specials.StareImmunity
        }

        break
    }
  }
}
