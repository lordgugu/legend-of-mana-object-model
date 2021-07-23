import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const AngelFeather: ActiveItem = {
  id: 'AngelFeather',
  name: 'Angel Feather',
  category: Items.Feathers.Category,
  energy: 32,
  activate: (project: Project) => {
    const { energy } = project
    const wisp = project.levels[Essences.Wisp]
    const shade = project.levels[Essences.Shade]

    Stats.widenRange(project, Stats.Charm, -3, 5)
    Stats.increment(project, Stats.Charm)

    if (shade === 0 && wisp >= 5 && energy >= 8) {
      project.cards.pending = Cards.EvilGod.FallenAngel
    }

    Essences.taint(project, Essences.Wisp)
  }
}
