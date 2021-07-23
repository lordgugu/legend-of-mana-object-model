import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const Bellgrapes: ActiveItem = {
  id: 'Bellgrapes',
  name: 'Bellgrapes',
  category: Items.Produce.Category,
  energy: 64,
  activate: (project: Project) => {
    Stats.widenRange(project, Stats.Magic, -5, 10)
    Stats.increment(project, Stats.Magic)
  }
}
