import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Squalphin: ActiveItem = {
  id: 'Squalphin',
  name: 'Squalphin',
  category: Items.Produce.Category,
  energy: 16,
  activate: (project: Project) => {
    const { energy } = project
    const undine = project.levels[Essences.Undine]
    const total = Essences.total(project)

    if (undine >= 3 && total >= 5 && energy >= 8) {
      project.cards.pending = Cards.HeavenGod.OceanGod
    }

    Essences.taint(project, Essences.Undine)
  }
}
