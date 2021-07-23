import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const LordOfFlies: ActiveCard = {
  id: 'LordOfFlies',
  name: 'Lord of Flies',
  category: Cards.EvilGod.Category,
  price: 6660,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.All.forEach((stat) => Stats.widenRange(project, stat, -10, 20))
        Stats.setMinimum(project, Stats.Skill, 15)
        Stats.All.forEach((stat) => Stats.decrement(project, stat))

        if (project.type === Projects.Weapon && project.gear == Weapons.Knife) {
          project.masterMoves.bottom = MasterMoves.Bottom.SinisterBlade
        }

        break
      case Cards.Leaving:
        const { top, middle, bottom } = project.cards

        if (bottom === Cards.Maiden.SacrificedNymph) {
          project.cards.bottom = LordOfFlies
        } else if (middle === Cards.Maiden.SacrificedNymph) {
          project.cards.middle = LordOfFlies
        } else if (top === Cards.Maiden.SacrificedNymph) {
          project.cards.top = LordOfFlies
        }

        break
    }
  }
}
