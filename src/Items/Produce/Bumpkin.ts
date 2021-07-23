import { Cards } from 'Cards'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const Bumpkin: ActiveItem = {
  id: 'Bumpkin',
  name: 'Bumpkin',
  category: Items.Produce.Category,
  energy: 24,
  activate: (project: Project) => {
    const { energy } = project

    Stats.widenRange(project, Stats.Luck, -1, 3)
    Stats.setMinimum(project, Stats.Luck, 5)

    if (energy >= 8) {
      project.cards.pending = Cards.Unspecified.Clown
    }
  }
}
