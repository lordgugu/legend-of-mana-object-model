import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const SalamanderSilver: ActiveItem = {
  id: 'SalamanderSilver',
  originalName: 'Sala Silver',
  remasteredName: 'Salamander Silver',
  category: Items.Coins.Category,
  energy: 48,
  activate: (project: Project) => {
    Essences.taint(project, Essences.Salamander)

    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Element.Salamander
    }
  }
}
