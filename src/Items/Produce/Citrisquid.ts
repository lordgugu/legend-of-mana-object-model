import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Citrisquid: ActiveItem = {
  id: 'Citrisquid',
  name: 'Citrisquid',
  category: Items.Produce.Category,
  energy: 8,
  activate: (project: Project) => {
    switch (project.type) {
      case Projects.Weapon:
        Gear.weapon075Percent(project, Gear.Sharp)
        Gear.weapon125Percent(project, Gear.Heavy)
        break
      case Projects.Equipment:
        Gear.equipment075Percent(project, Gear.Slash)
        Gear.equipment125Percent(project, Gear.Strike)
        break
    }
  }
}
