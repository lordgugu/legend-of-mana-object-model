import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'

export const PixieOfSloth: ActiveCard = {
  id: 'PixieOfSloth',
  name: 'Pixie (of Sloth)',
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
            project.cards[slot] = Cards.EvilGod.LunarWitch
          }

          Cards.EvilGod.LunarWitch.activate(project, slot)
        } else {
          Stats.All.forEach((stat) => {
            Stats.widenRange(project, stat, -1, 3)
            Stats.decrement(project, stat)
          })

          Stats.increment(project, Stats.Magic)
        }
        break
    }
  }
}
