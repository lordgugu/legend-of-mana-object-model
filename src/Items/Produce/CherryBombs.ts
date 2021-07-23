import { Equipments } from 'Equipments'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const CherryBombs: ActiveItem = {
  id: 'CherryBombs',
  name: 'Cherry Bombs',
  category: Items.Produce.Category,
  energy: 16,
  activate: (project: Project) => {
    if (project.type === Projects.Equipment && project.gear === Equipments.Ring) {
      Stats.All.forEach((stat) => Stats.widenRange(project, stat, -3, 9))
    }
  }
}
