import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Equipments } from 'Equipments'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { Specials } from 'Specials'

export const SpiritOfHousework: ActiveCard = {
  id: 'SpiritOfHousework',
  name: 'Spirit (of Housework)',
  category: Cards.Spirit.Category,
  price: 800,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.increment(project, Stats.Luck)

        if (project.type === Projects.Equipment) {
          switch (project.gear) {
            case Equipments.Mantle:
              Immunities.add(project, Immunities.Sleep)
              break
            case Equipments.Ring:
              project.special = Specials.ExtraLucre
              break
          }
        }
        break
    }
  }
}
