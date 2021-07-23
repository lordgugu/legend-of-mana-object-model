import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const SalamanderGold: ActiveItem = {
  id: 'SalamanderGold',
  originalName: 'Sala Gold',
  remasteredName: 'Salamander Gold',
  category: Items.Coins.Category,
  energy: 64,
  activate: (project: Project) => {
    Essences.taint(project, Essences.Salamander)

    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Element.Salamander
    }
  }
}
