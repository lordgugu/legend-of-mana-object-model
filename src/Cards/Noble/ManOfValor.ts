import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const ManOfValor: ActiveCard = {
  id: 'ManOfValor',
  name: 'Man of Valor',
  category: Cards.Noble.Category,
  price: 1000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.All.forEach((stat) => Stats.widenRange(project, stat, -3, 5))

        Stats.increment(project, Stats.Power)
        Stats.increment(project, Stats.Constitution)

        if (project.type == Projects.Weapon && project.gear === Weapons.Spear) {
          project.masterMoves.top = MasterMoves.Top.SpearOfLight
        }

        break
    }
  }
}
