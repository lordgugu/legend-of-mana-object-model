import { Essences } from 'Forge/Essences'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const SpinyCarrot: ActiveItem = {
  id: 'SpinyCarrot',
  name: 'Spiny Carrot',
  category: Items.Produce.Category,
  energy: 8,
  activate: (project: Project) => {
    if (project.type === Projects.Weapon) {
      Gear.weapon125Percent(project, Gear.Sharp)
      Gear.weapon075Percent(project, Gear.Heavy)
    }

    Essences.taint(project, Essences.Undine)
  }
}
