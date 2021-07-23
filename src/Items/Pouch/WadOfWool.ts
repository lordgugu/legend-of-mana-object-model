import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const WadOfWool: ActiveItem = {
  id: 'WadOfWool',
  name: 'Wad of Wool',
  category: Items.Pouch.Category,
  energy: 16,
  activate: (project: Project) => {
    const { energy } = project
    const shade = project.levels[Essences.Shade]
    const dryad = project.levels[Essences.Dryad]
    const total = Essences.total(project)

    if (shade > 0 && dryad > 0 && total >= 3 && energy >= 8) {
      project.cards.pending = Cards.Noble.Wanderer
    }
  }
}
