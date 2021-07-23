import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const LunarWitch: ActiveCard = {
  id: 'LunarWitch',
  originalName: 'Witch of Moon',
  remasteredName: 'Lunar Witch',
  category: Cards.EvilGod.Category,
  price: 6660,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.All.forEach((stat) => Stats.widenRange(project, stat, -10, 20))
        Stats.setMinimum(project, Stats.Magic, 15)
        Stats.All.forEach((stat) => Stats.decrement(project, stat))

        if (project.type === Projects.Weapon && project.gear == Weapons.Sword) {
          project.masterMoves.middle = MasterMoves.Middle.Vampsword
        }

        break
      case Cards.Leaving:
        const { top, middle, bottom } = project.cards

        if (bottom === Cards.Maiden.SacrificedNymph) {
          project.cards.bottom = LunarWitch
        } else if (middle === Cards.Maiden.SacrificedNymph) {
          project.cards.middle = LunarWitch
        } else if (top === Cards.Maiden.SacrificedNymph) {
          project.cards.top = LunarWitch
        }

        break
    }
  }
}
