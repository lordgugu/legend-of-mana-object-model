import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const MotherOfGods: ActiveCard = {
  id: 'MotherOfGods',
  name: 'Mother of Gods',
  category: Cards.HeavenGod.Category,
  price: 4000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.widenRange(project, Stats.Magic, -3, 5)
        Stats.widenRange(project, Stats.Spirit, -3, 5)
        Stats.widenRange(project, Stats.Charm, -3, 5)

        Stats.setMinimum(project, Stats.Magic, 5)
        Stats.setMinimum(project, Stats.Spirit, 5)
        Stats.setMinimum(project, Stats.Charm, 5)

        if (project.type === Projects.Weapon && project.gear === Weapons.Flail) {
          project.masterMoves.top = MasterMoves.Top.GreenPrincess
          project.masterMoves.middle = MasterMoves.Middle.GameOfDeath
          project.masterMoves.bottom = MasterMoves.Bottom.RedDream
        }
    }
  }
}
