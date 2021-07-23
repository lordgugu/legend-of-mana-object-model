import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const MaskedPotato: ActiveItem = {
  id: 'MaskedPotato',
  name: 'Masked Potato',
  category: Items.Produce.Category,
  energy: 24,
  activate: (project: Project) => {
    if (project.type === Projects.Weapon) {
      Gear.weapon075Percent(project, Gear.Sharp)
      Gear.weapon125Percent(project, Gear.Heavy)
    }
  }
}
