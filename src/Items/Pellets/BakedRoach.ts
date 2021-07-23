import { Equipments } from 'Equipments'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const BakedRoach: ActiveItem = {
  id: 'BakedRoach',
  name: 'Baked Roach',
  category: Items.Pellets.Category,
  energy: 24,
  activate: (project: Project) => {
    if (project.type === Projects.Equipment && project.gear === Equipments.Robe) {
      Immunities.add(project, Immunities.Poison)
    }
  }
}
