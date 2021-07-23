import { Cards } from 'Cards'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Springanana: ActiveItem = {
  id: 'Springanana',
  name: 'Springanana',
  category: Items.Produce.Category,
  energy: 16,
  activate: (project: Project) => {
    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.World.HeavensScale
    }
  }
}
