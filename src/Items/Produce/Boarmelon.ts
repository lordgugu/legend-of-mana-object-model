import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const Boarmelon: ActiveItem = {
  id: 'Boarmelon',
  name: 'Boarmelon',
  category: Items.Produce.Category,
  energy: 32,
  activate: (project: Project) => {
    Stats.widenRange(project, Stats.Power, -1, 3)
    Stats.increment(project, Stats.Power)
  }
}
