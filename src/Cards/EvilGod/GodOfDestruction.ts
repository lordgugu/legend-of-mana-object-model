import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const GodOfDestruction: ActiveCard = {
  id: 'GodOfDestruction',
  name: 'God of Destruction',
  category: Cards.EvilGod.Category,
  price: 6660,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.All.forEach((stat) => Stats.widenRange(project, stat, -10, 20))
        Stats.setMinimum(project, Stats.Power, 15)
        Stats.All.forEach((stat) => Stats.decrement(project, stat))

        switch (project.type) {
          case Projects.Weapon:
            if (project.gear == Weapons.Sword) {
              project.masterMoves.middle = MasterMoves.Middle.FlameTongue
            }
            break
          case Projects.Equipment:
            Immunities.add(project, Immunities.Freeze)
            break
        }

        break
      case Cards.Leaving:
        const { top, middle, bottom } = project.cards

        if (bottom === Cards.Maiden.SacrificedNymph) {
          project.cards.bottom = GodOfDestruction
        } else if (middle === Cards.Maiden.SacrificedNymph) {
          project.cards.middle = GodOfDestruction
        } else if (top === Cards.Maiden.SacrificedNymph) {
          project.cards.top = GodOfDestruction
        }

        break
    }
  }
}
