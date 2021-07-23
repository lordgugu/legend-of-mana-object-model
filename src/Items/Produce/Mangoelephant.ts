import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const Mangoelephant: ActiveItem = {
  id: 'Mangoelephant',
  name: 'Mangoelephant',
  category: Items.Produce.Category,
  energy: 64,
  activate: (project: Project) => {
    Stats.widenRange(project, Stats.Constitution, -5, 10)
    Stats.increment(project, Stats.Constitution)
  }
}
