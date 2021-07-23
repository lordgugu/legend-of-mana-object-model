import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Firestone: ActiveItem = {
  id: 'Firestone',
  originalName: 'Fire Stone',
  remasteredName: 'Firestone',
  category: Items.MagicStones.Category,
  energy: 24,
  activate: (project: Project) => {
    Essences.taint(project, Essences.Salamander)

    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Element.Salamander
    }
  }
}
