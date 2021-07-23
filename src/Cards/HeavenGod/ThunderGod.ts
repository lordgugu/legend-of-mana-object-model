import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const ThunderGod: ActiveCard = {
  id: 'ThunderGod',
  name: 'Thunder God',
  category: Cards.HeavenGod.Category,
  price: 4000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.widenRange(project, Stats.Power, -3, 5)
        Stats.widenRange(project, Stats.Skill, -3, 5)
        Stats.widenRange(project, Stats.Defense, -3, 5)

        Stats.setMinimum(project, Stats.Power, 5)
        Stats.setMinimum(project, Stats.Skill, 5)
        Stats.setMinimum(project, Stats.Defense, 5)

        if (project.type === Projects.Weapon && project.gear === Weapons.Hammer) {
          project.masterMoves.bottom = MasterMoves.Bottom.Mjolnir
        }
        break
    }
  }
}
