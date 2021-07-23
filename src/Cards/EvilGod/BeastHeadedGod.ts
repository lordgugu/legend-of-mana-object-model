import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const BeastHeadedGod: ActiveCard = {
  id: 'BeastHeadedGod',
  originalName: 'Beast-headed God',
  remasteredName: 'Beast-Headed God',
  category: Cards.EvilGod.Category,
  price: 6660,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.All.forEach((stat) => Stats.widenRange(project, stat, -10, 20))
        Stats.setMinimum(project, Stats.Constitution, 15)
        Stats.All.forEach((stat) => Stats.decrement(project, stat))

        if (project.type === Projects.Weapon && project.gear == Weapons.Knife) {
          project.masterMoves.middle = MasterMoves.Middle.PoisonBlade
        }

        break
      case Cards.Leaving:
        const { top, middle, bottom } = project.cards

        if (bottom === Cards.Maiden.SacrificedNymph) {
          project.cards.bottom = BeastHeadedGod
        } else if (middle === Cards.Maiden.SacrificedNymph) {
          project.cards.middle = BeastHeadedGod
        } else if (top === Cards.Maiden.SacrificedNymph) {
          project.cards.top = BeastHeadedGod
        }

        break
    }
  }
}
