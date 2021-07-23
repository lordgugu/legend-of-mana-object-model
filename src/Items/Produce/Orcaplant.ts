import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Orcaplant: ActiveItem = {
  id: 'Orcaplant',
  name: 'Orcaplant',
  category: Items.Produce.Category,
  energy: 24,
  activate: (project: Project) => {
    const undine = project.levels[Essences.Undine]
    const total = Essences.total(project)

    if (undine >= 3 && total >= 5) {
      project.cards.pending = Cards.HeavenGod.OceanGod
    }
  }
}
