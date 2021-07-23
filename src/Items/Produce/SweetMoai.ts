import { Equipments } from 'Equipments'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const SweetMoai: ActiveItem = {
  id: 'SweetMoai',
  name: 'Sweet Moai',
  category: Items.Produce.Category,
  energy: 32,
  activate: (project: Project) => {
    if (project.type === Projects.Equipment) {
      switch (project.gear) {
        case Equipments.Helm:
          Gear.equipment125Percent(project, Gear.Strike)
          Gear.equipment125Percent(project, Gear.Slash)
          Gear.equipment125Percent(project, Gear.Pierce)
          break
        case Equipments.Hat:
          Gear.equipment150Percent(project, Gear.Strike)
          Gear.equipment150Percent(project, Gear.Slash)
          Gear.equipment150Percent(project, Gear.Pierce)
          break
      }
    }
  }
}
