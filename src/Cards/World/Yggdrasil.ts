import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { Weapons } from 'Weapons'

export const Yggdrasil: ActiveCard = {
  id: 'Yggdrasil',
  name: 'Yggdrasil',
  category: Cards.World.Category,
  price: 3000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Hidden:
        const { worldPower } = project

        if (worldPower !== undefined && worldPower !== Cards.Stage.BedOfThorns) {
          project.cards.hidden = undefined
        }

        break
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        if (project.type === Projects.Weapon && project.gear === Weapons.Staff) {
          Stats.All.forEach((stat) => Stats.widenRange(project, stat, -3, 9))
        } else {
          Stats.All.forEach((stat) => Stats.widenRange(project, stat, -5, 10))
        }

        Stats.All.forEach((stat) => Stats.increment(project, stat))

        break
    }
  }
}
