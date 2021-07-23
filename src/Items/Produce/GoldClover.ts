import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const GoldClover: ActiveItem = {
  id: 'GoldClover',
  name: 'Gold Clover',
  category: Items.Produce.Category,
  energy: 64,
  activate: (project: Project) => {
    if (project.type === Projects.Weapon) {
      Gear.weapon125Percent(project, Gear.Heavy)
    }
  }
}
