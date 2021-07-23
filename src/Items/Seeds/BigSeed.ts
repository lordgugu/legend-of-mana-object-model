import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const BigSeed: ActiveItem = {
  id: 'BigSeed',
  name: 'Big Seed',
  category: Items.Seeds.Category,
  energy: 24,
  activate: (project: Project) => {
    Essences.taint(project, Essences.Dryad)

    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Element.Dryad
    }
  }
}
