import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Equipments } from 'Equipments'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { Specials } from 'Specials'

export const Phoenix: ActiveCard = {
  id: 'Phoenix',
  name: 'Phoenix',
  category: Cards.BeastGod.Category,
  price: 2500,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.widenRange(project, Stats.Power, -3, 5)
        Stats.widenRange(project, Stats.Skill, -3, 5)

        Stats.setMinimum(project, Stats.Power, 3)
        Stats.setMinimum(project, Stats.Skill, 3)

        if (project.type === Projects.Equipment) {
          switch (project.gear) {
            case Equipments.Ring:
            case Equipments.Pendant:
              const top = project.cards[Cards.Top]
              const middle = project.cards[Cards.Middle]
              const bottom = project.cards[Cards.Bottom]

              if (Array.of(top, middle, bottom).includes(Cards.Stage.Volcano)) {
                project.special = Specials.AutoRevive
              }

              break
          }
        }

        break
    }
  }
}
