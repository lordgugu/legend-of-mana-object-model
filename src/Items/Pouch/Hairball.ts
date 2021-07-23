import { Cards } from 'Cards'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Hairball: ActiveItem = {
  id: 'Hairball',
  name: 'Hairball',
  category: Items.Pouch.Category,
  energy: 8,
  activate: (project: Project) => {
    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Spirit.SpiritOfHousework
    }
  }
}
