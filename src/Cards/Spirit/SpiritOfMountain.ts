import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const SpiritOfMountain: ActiveCard = {
  id: 'SpiritOfMountain',
  name: 'Spirit (of Mountain)',
  category: Cards.Spirit.Category,
  price: 800,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.increment(project, Stats.Defense)
        Stats.increment(project, Stats.Constitution)

        if (project.type === Projects.Weapon && project.gear === Weapons.Hammer) {
          project.masterMoves.bottom = MasterMoves.Bottom.QuakeHammer
        }
        break
    }
  }
}
