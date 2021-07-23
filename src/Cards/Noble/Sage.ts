import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const Sage: ActiveCard = {
  id: 'Sage',
  name: 'Sage',
  category: Cards.Noble.Category,
  price: 1000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.All.forEach((stat) => Stats.widenRange(project, stat, -3, 5))

        Stats.increment(project, Stats.Magic)
        Stats.increment(project, Stats.Defense)

        if (project.type == Projects.Weapon && project.gear === Weapons.Bow) {
          project.masterMoves.top = MasterMoves.Top.PhoenixFalling
        }

        break
    }
  }
}
