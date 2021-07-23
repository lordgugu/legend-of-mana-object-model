import { Cards } from 'Cards'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const HolyWater: ActiveItem = {
  id: 'HolyWater',
  name: 'Holy Water',
  category: Items.Bottles.Category,
  energy: 16,
  activate: (project: Project) => {
    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Unspecified.Cleric
    }

    project.sticky = false
  }
}
