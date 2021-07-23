import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const HoneyOnion: ActiveItem = {
  id: 'HoneyOnion',
  name: 'Honey Onion',
  category: Items.Produce.Category,
  energy: 32,
  activate: (project: Project) => {
    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Unspecified.Princess
    }

    Essences.taint(project, Essences.Dryad)
  }
}
