import { Equipments } from 'Equipments'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Moss: ActiveItem = {
  id: 'Moss',
  name: 'Moss',
  category: Items.Urns.Category,
  energy: 32,
  activate: (project: Project) => {
    if (project.type === Projects.Equipment && project.gear === Equipments.Helm) {
      Immunities.add(project, Immunities.Darkness)
    }
  }
}
