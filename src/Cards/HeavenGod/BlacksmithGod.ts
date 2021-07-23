import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const BlacksmithGod: ActiveCard = {
  id: 'BlacksmithGod',
  name: 'Blacksmith God',
  category: Cards.HeavenGod.Category,
  price: 2800,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.widenRange(project, Stats.Defense, -5, 10)
        Stats.setMinimum(project, Stats.Defense, 10)

        if (project.type === Projects.Weapon && project.gear === Weapons.Hammer) {
          project.masterMoves.bottom = MasterMoves.Bottom.SledgeHammer
        }

        break
    }
  }
}
