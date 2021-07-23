import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const RoundSeed: ActiveItem = {
  id: 'RoundSeed',
  name: 'Round Seed',
  category: Items.Seeds.Category,
  energy: 16,
  activate: (project: Project) => {
    Essences.taint(project, Essences.Dryad)

    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Element.Dryad
    }
  }
}
