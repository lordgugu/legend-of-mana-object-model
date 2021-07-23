import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const MushInABox: ActiveItem = {
  id: 'MushInABox',
  name: 'Mush-In-A-Box',
  category: Items.Produce.Category,
  energy: 32,
  activate: (project: Project) => {
    Essences.taint(project, Essences.Shade)
  }
}
