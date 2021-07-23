import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Garlicrown: ActiveItem = {
  id: 'Garlicrown',
  name: 'Garlicrown',
  category: Items.Produce.Category,
  energy: 8,
  activate: (project: Project) => {
    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Unspecified.King
    }

    project.sticky = false

    Essences.taint(project, Essences.Aura)
  }
}
