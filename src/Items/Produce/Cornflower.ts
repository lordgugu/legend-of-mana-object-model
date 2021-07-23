import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Cornflower: ActiveItem = {
  id: 'Cornflower',
  name: 'Cornflower',
  category: Items.Produce.Category,
  energy: 24,
  activate: (project: Project) => {
    Essences.taint(project, Essences.Wisp)
  }
}
