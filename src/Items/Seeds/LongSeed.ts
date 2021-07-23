import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const LongSeed: ActiveItem = {
  id: 'LongSeed',
  name: 'Long Seed',
  category: Items.Seeds.Category,
  energy: 24,
  activate: (project: Project) => {
    Essences.taint(project, Essences.Dryad)

    if (project.energy >= 8) {
      project.cards.pending = Cards.Element.Dryad
    }
  }
}
