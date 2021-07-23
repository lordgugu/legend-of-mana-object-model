import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const MessyScroll: ActiveItem = {
  id: 'MessyScroll',
  name: 'Messy Scroll',
  category: Items.Pouch.Category,
  energy: 16,
  activate: (project: Project) => {
    const { energy } = project
    const jinn = project.levels[Essences.Jinn]
    const undine = project.levels[Essences.Undine]
    const total = Essences.total(project)

    if (jinn > 0 && undine > 0 && total >= 3 && energy >= 8) {
      project.cards.pending = Cards.Noble.Sage
    }
  }
}
