import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const TakoBug: ActiveItem = {
  id: 'TakoBug',
  name: 'Tako Bug',
  category: Items.Unspecified.Category,
  energy: 8,
  activate: (project: Project) => {
    Stats.increment(project, Stats.Charm)
  }
}
