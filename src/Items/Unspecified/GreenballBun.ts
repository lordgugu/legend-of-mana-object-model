import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const GreenballBun: ActiveItem = {
  id: 'GreenballBun',
  name: 'Greenball Bun',
  category: Items.Unspecified.Category,
  energy: 8,
  activate: (project: Project) => {
    Stats.increment(project, Stats.Constitution)
  }
}
