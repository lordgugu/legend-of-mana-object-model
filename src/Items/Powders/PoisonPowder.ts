import { Cards } from 'Cards'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const PoisonPowder: ActiveItem = {
  id: 'PoisonPowder',
  name: 'Poison Powder',
  category: Items.Powders.Category,
  energy: 8,
  activate: (project: Project) => {
    const { energy } = project

    if (energy >= 4) {
      project.cards.pending = Cards.Pixie.PixieOfWrath
    }
  }
}
