import { Gear } from 'Forge/Gear'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Rhinoloupe: ActiveItem = {
  id: 'Rhinoloupe',
  name: 'Rhinoloupe',
  category: Items.Produce.Category,
  energy: 32,
  activate: (project: Project) => {
    switch (project.type) {
      case Projects.Weapon:
        Gear.weapon125Percent(project, Gear.Sharp)
        break
      case Projects.Equipment:
        Immunities.set(project, Immunities.Poison)
        break
    }
  }
}
