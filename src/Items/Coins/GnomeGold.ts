import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const GnomeGold: ActiveItem = {
  id: 'GnomeGold',
  name: 'Gnome Gold',
  category: Items.Coins.Category,
  energy: 64,
  activate: (project: Project) => {
    Essences.taint(project, Essences.Gnome)

    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Element.Gnome
    }
  }
}
