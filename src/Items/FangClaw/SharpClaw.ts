import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const SharpClaw: ActiveItem = {
  id: 'SharpClaw',
  name: 'Sharp Claw',
  category: Items.FangClaw.Category,
  energy: 24,
  activate: (project: Project) => {
    const { energy } = project
    const salamander = project.levels[Essences.Salamander]
    const undine = project.levels[Essences.Undine]

    if (project.type === Projects.Weapon) {
      Gear.weapon150Percent(project, Gear.Sharp)
      Gear.weapon050Percent(project, Gear.Heavy)
    }

    if (undine === 0 && salamander >= 5 && energy >= 8) {
      project.cards.pending = Cards.EvilGod.GodOfDestruction
    }
  }
}
