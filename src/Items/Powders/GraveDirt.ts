import { Cards } from 'Cards'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const GraveDirt: ActiveItem = {
  id: 'Grave Dirt',
  name: 'Grave Dirt',
  category: Items.Powders.Category,
  energy: 32,
  activate: (project: Project) => {
    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.World.DyingEarth
    }
  }
}
