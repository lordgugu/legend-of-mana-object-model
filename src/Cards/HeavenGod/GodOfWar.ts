import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const GodOfWar: ActiveCard = {
  id: 'GodOfWar',
  name: 'God of War',
  category: Cards.HeavenGod.Category,
  price: 3000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.widenRange(project, Stats.Power, -5, 10)
        Stats.setMinimum(project, Stats.Power, 10)

        if (project.type === Projects.Weapon && project.gear === Weapons.Axe) {
          project.masterMoves.middle = MasterMoves.Middle.DragonSlayer
        }

        break
    }
  }
}
