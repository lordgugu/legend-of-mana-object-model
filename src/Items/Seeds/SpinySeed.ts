import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const SpinySeed: ActiveItem = {
  id: 'SpinySeed',
  name: 'Spiny Seed',
  category: Items.Seeds.Category,
  energy: 48,
  activate: (project: Project) => {
    const { energy } = project
    const dryad = project.levels[Essences.Dryad]

    if (dryad >= 5 && energy >= 8) {
      project.cards.pending = Cards.World.Yggdrasil
    }

    Essences.taint(project, Essences.Dryad)
  }
}
