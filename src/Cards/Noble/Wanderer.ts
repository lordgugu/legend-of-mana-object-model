import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const Wanderer: ActiveCard = {
  id: 'Wanderer',
  name: 'Wanderer',
  category: Cards.Noble.Category,
  price: 1000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.All.forEach((stat) => Stats.widenRange(project, stat, -3, 5))

        Stats.increment(project, Stats.Skill)
        Stats.increment(project, Stats.Spirit)

        if (project.type == Projects.Weapon && project.gear === Weapons.Axe) {
          project.masterMoves.bottom = MasterMoves.Bottom.Woodchopper
        }

        break
    }
  }
}
