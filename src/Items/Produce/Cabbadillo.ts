import { Equipments } from 'Equipments'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Cabbadillo: ActiveItem = {
  id: 'Cabbadillo',
  name: 'Cabbadillo',
  category: Items.Produce.Category,
  energy: 8,
  activate: (project: Project) => {
    if (project.type === Projects.Equipment && project.gear === Equipments.Hauberk) {
      Gear.equipment125Percent(project, Gear.Strike)
      Gear.equipment125Percent(project, Gear.Slash)
      Gear.equipment125Percent(project, Gear.Pierce)
      Gear.equipment075Percent(project, Gear.Magic)
    }
  }
}
