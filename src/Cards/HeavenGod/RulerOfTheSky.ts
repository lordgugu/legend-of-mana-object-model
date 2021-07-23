import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const RulerOfTheSky: ActiveCard = {
  id: 'RulerOfTheSky',
  name: 'Ruler of the Sky',
  category: Cards.HeavenGod.Category,
  price: 5000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.widenRange(project, Stats.Power, -3, 9)
        Stats.widenRange(project, Stats.Magic, -3, 9)

        Stats.setMinimum(project, Stats.Power, 9)
        Stats.setMinimum(project, Stats.Magic, 9)

        if (project.type === Projects.Weapon) {
          switch (project.gear) {
            case Weapons.Spear:
              project.masterMoves.top = MasterMoves.Top.Gungnir
              break
            case Weapons.Staff:
              project.masterMoves.bottom = MasterMoves.Bottom.Electrosceptre
              break
          }
        }

        break
    }
  }
}
