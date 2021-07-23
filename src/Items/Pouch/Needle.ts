import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Needle: ActiveItem = {
  id: 'Needle',
  name: 'Needle',
  category: Items.Pouch.Category,
  energy: 8,
  activate: (project: Project) => {
    const { energy } = project
    const salamander = project.levels[Essences.Salamander]
    const dryad = project.levels[Essences.Dryad]

    if (salamander === 0 && dryad > 0 && energy >= 8) {
      project.cards.pending = Cards.Stage.BedOfThorns
    }
  }
}
