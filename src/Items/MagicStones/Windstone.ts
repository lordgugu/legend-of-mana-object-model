import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Windstone: ActiveItem = {
  id: 'Windstone',
  originalName: 'Wind Stone',
  remasteredName: 'Windstone',
  category: Items.MagicStones.Category,
  energy: 24,
  activate: (project: Project) => {
    Essences.taint(project, Essences.Jinn)

    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Element.Jinn
    }
  }
}
