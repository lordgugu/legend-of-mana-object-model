import { Equipments } from 'Equipments'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const ZombieClaw: ActiveItem = {
  id: 'ZombieClaw',
  name: 'Zombie Claw',
  category: Items.FangClaw.Category,
  energy: 32,
  activate: (project: Project) => {
    if (project.type === Projects.Equipment && project.gear === Equipments.Pendant) {
      Immunities.add(project, Immunities.Paralysis)
    }
  }
}
