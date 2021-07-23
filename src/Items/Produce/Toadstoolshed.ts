import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const Toadstoolshed: ActiveItem = {
  id: 'Toadstoolshed',
  name: 'Toadstoolshed',
  category: Items.Produce.Category,
  energy: 64,
  activate: (project: Project) => {
    Stats.All.forEach((stat) => Stats.increment(project, stat))

    Essences.taint(project, Essences.Shade)
  }
}
