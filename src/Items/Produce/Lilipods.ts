import { Cards } from 'Cards'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const Lilipods: ActiveItem = {
  id: 'Lilipods',
  name: 'Lilipods',
  category: Items.Produce.Category,
  energy: 8,
  activate: (project: Project) => {
    const { energy } = project

    Stats.widenRange(project, Stats.Spirit, -1, 3)
    Stats.increment(project, Stats.Spirit)

    if (energy >= 8) {
      project.cards.pending = Cards.Maiden.EnticedNymph
    }
  }
}
