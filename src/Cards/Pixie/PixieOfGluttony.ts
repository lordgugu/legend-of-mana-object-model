import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'

export const PixieOfGluttony: ActiveCard = {
  id: 'PixieOfGluttony',
  name: 'Pixie (of Gluttony)',
  category: Cards.Pixie.Category,
  price: 150,
  activate: (project: Project, slot: CardSlot) => {
    const { energy, worldPower } = project

    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        if (worldPower === Cards.World.Ragnarok) {
          if (energy >= 8) {
            project.cards[slot] = Cards.EvilGod.Leviathan
          }

          Cards.EvilGod.Leviathan.activate(project, slot)
        } else {
          Stats.All.forEach((stat) => {
            Stats.widenRange(project, stat, -1, 3)
            Stats.decrement(project, stat)
          })

          Stats.increment(project, Stats.Constitution)
        }
        break
    }
  }
}
