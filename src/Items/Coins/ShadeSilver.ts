import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const ShadeSilver: ActiveItem = {
  id: 'ShadeSilver',
  name: 'Shade Silver',
  category: Items.Coins.Category,
  energy: 48,
  activate: (project: Project) => {
    Essences.taint(project, Essences.Shade)

    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Element.Shade
    }
  }
}
