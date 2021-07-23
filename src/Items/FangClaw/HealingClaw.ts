import { Cards } from 'Cards'
import { Equipments } from 'Equipments'
import { Essences } from 'Forge/Essences'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const HealingClaw: ActiveItem = {
  id: 'HealingClaw',
  name: 'Healing Claw',
  category: Items.FangClaw.Category,
  energy: 24,
  activate: (project: Project) => {
    const { energy } = project
    const wisp = project.levels[Essences.Wisp]
    const salamander = project.levels[Essences.Salamander]

    if (project.type === Projects.Equipment && project.gear === Equipments.Shield) {
      Immunities.add(project, Immunities.Poison)
    }

    if (salamander === 0 && wisp > 0 && energy >= 8) {
      project.cards.pending = Cards.Stage.Tower
    }
  }
}
