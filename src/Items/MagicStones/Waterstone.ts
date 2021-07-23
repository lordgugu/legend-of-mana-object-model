import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Waterstone: ActiveItem = {
  id: 'Waterstone',
  originalName: 'Water Stone',
  remasteredName: 'Waterstone',
  category: Items.MagicStones.Category,
  energy: 24,
  activate: (project: Project) => {
    Essences.taint(project, Essences.Undine)

    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Element.Undine
    }
  }
}
