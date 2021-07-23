import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Earthstone: ActiveItem = {
  id: 'Earthstone',
  originalName: 'Earth Stone',
  remasteredName: 'Earthstone',
  category: Items.MagicStones.Category,
  energy: 24,
  activate: (project: Project) => {
    Essences.taint(project, Essences.Gnome)

    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Element.Gnome
    }
  }
}
