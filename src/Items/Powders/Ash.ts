import { Cards } from 'Cards'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Ash: ActiveItem = {
  id: 'Ash',
  name: 'Ash',
  category: Items.Powders.Category,
  energy: 16,
  activate: (project: Project) => {
    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Stage.Volcano
    }
  }
}
