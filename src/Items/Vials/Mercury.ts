import { Cards } from 'Cards'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Mercury: ActiveItem = {
  id: 'Mercury',
  name: 'Mercury',
  category: Items.Vials.Category,
  energy: 24,
  activate: (project: Project) => {
    const { energy } = project

    if (energy >= 4) {
      project.cards.pending = Cards.Unspecified.Witch
    }
  }
}
