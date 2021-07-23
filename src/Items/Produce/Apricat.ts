import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Apricat: ActiveItem = {
  id: 'Apricat',
  name: 'Apricat',
  category: Items.Produce.Category,
  energy: 8,
  activate: (project: Project) => {
    if (project.type === Projects.Weapon) {
      Gear.weapon075Percent(project, Gear.Force)
      Gear.weapon125Percent(project, Gear.Tech)
    }
  }
}
