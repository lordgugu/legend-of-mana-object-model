import { Cards } from 'Cards'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const Conchurnip: ActiveItem = {
  id: 'Conchurnip',
  name: 'Conchurnip',
  category: Items.Produce.Category,
  energy: 16,
  activate: (project: Project) => {
    const { energy } = project

    Stats.widenRange(project, Stats.Defense, -1, 3)
    Stats.increment(project, Stats.Defense)

    if (energy >= 16) {
      project.cards.pending = Cards.Spirit.SpiritOfOcean
    }
  }
}
