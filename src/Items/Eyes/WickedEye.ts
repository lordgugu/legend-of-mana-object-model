import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const WickedEye: ActiveItem = {
  id: 'WickedEye',
  name: 'Wicked Eye',
  category: Items.Eyes.Category,
  energy: 48,
  activate: (project: Project) => {
    if (project.type === Projects.Weapon) {
      Gear.weapon125Percent(project, Gear.Sharp)
    }
  }
}
