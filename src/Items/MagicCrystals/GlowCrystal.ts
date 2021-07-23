import { Cards } from 'Cards'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const GlowCrystal: ActiveItem = {
  id: 'GlowCrystal',
  name: 'Glow Crystal',
  category: Items.MagicCrystals.Category,
  energy: 96,
  activate: (project: Project) => {
    const { energy } = project

    if (energy >= 16) {
      project.cards.pending = Cards.Maiden.NymphOfDawn
    }
  }
}
