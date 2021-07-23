import { Cards } from 'Cards'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Sulfur: ActiveItem = {
  id: 'Sulfur',
  originalName: 'Sulpher',
  remasteredName: 'Sulfur',
  category: Items.Powders.Category,
  energy: 24,
  activate: (project: Project) => {
    const { energy } = project

    if (energy >= 4) {
      project.cards.pending = Cards.Unspecified.Sorceror
    }
  }
}
