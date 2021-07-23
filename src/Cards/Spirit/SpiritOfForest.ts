import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const SpiritOfForest: ActiveCard = {
  id: 'SpiritOfForest',
  name: 'Spirit (of Forest)',
  category: Cards.Spirit.Category,
  price: 800,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.increment(project, Stats.Spirit)
        Stats.increment(project, Stats.Charm)

        if (project.type === Projects.Weapon && project.gear === Weapons.Bow) {
          project.masterMoves.middle = MasterMoves.Middle.ElvenArcher
        }
        break
    }
  }
}
