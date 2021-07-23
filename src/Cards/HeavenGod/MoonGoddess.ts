import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const MoonGoddess: ActiveCard = {
  id: 'MoonGoddess',
  name: 'Moon Goddess',
  category: Cards.HeavenGod.Category,
  price: 3000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.widenRange(project, Stats.Spirit, -5, 10)
        Stats.setMinimum(project, Stats.Spirit, 10)

        if (project.type === Projects.Weapon) {
          switch (project.gear) {
            case Weapons.Sword:
              project.masterMoves.bottom = MasterMoves.Bottom.Moonlight
              break
            case Weapons.Bow:
              project.masterMoves.middle = MasterMoves.Middle.LunarShot
              break
          }
        }
        break
    }
  }
}
