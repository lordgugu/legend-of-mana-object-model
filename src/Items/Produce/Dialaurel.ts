import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Dialaurel: ActiveItem = {
  id: 'Dialaurel',
  name: 'Dialaurel',
  category: Items.Produce.Category,
  energy: 64,
  activate: (project: Project) => {
    const { energy } = project
    const shade = project.levels[Essences.Shade]
    const salamander = project.levels[Essences.Salamander]

    if (salamander === 0 && shade > 0 && energy >= 8) {
      project.cards.pending = Cards.Stage.Metropolis
    }
  }
}
