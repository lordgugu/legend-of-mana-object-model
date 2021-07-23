import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Scissors: ActiveItem = {
  id: 'Scissors',
  name: 'Scissors',
  category: Items.FangClaw.Category,
  energy: 16,
  activate: (project: Project) => {
    if (project.type === Projects.Weapon) {
      Gear.weapon150Percent(project, Gear.Force)
      Gear.weapon050Percent(project, Gear.Tech)
    }
  }
}
