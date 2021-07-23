import { Cards } from 'Cards'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const ChaosCrystal: ActiveItem = {
  id: 'ChaosCrystal',
  name: 'Chaos Crystal',
  category: Items.MagicCrystals.Category,
  energy: 24,
  activate: (project: Project) => {
    const { energy } = project

    if (energy >= 16) {
      project.cards.pending = Cards.World.AncientMoon
    }
  }
}
