import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const RavenFeather: ActiveItem = {
  id: 'RavenFeather',
  name: 'Raven Feather',
  category: Items.Feathers.Category,
  energy: 24,
  activate: (project: Project) => {
    const { energy } = project

    Stats.widenRange(project, Stats.Spirit, -3, 5)
    Stats.increment(project, Stats.Spirit)

    if (energy >= 8) {
      project.cards.pending = Cards.Unspecified.Raven
    }

    Essences.taint(project, Essences.Shade)
  }
}
