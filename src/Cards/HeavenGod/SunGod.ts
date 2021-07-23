import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const SunGod: ActiveCard = {
  id: 'SunGod',
  name: 'Sun God',
  category: Cards.HeavenGod.Category,
  price: 3000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.widenRange(project, Stats.Charm, -5, 10)
        Stats.setMinimum(project, Stats.Charm, 10)

        if (project.type === Projects.Weapon) {
          switch (project.gear) {
            case Weapons.Sword:
              project.masterMoves.middle = MasterMoves.Middle.Sunlight
              break
            case Weapons.Bow:
              project.masterMoves.top = MasterMoves.Top.SolarFlare
              break
          }
        }
        break
    }
  }
}
