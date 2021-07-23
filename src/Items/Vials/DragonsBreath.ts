import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const DragonsBreath: ActiveItem = {
  id: 'DragonsBreath',
  name: "Dragon's Breath",
  category: Items.Vials.Category,
  energy: 24,
  activate: (project: Project) => {
    const { energy } = project
    const wisp = project.levels[Essences.Wisp]
    const salamander = project.levels[Essences.Salamander]
    const total = Essences.total(project)

    if (project.type === Projects.Weapon) {
      Gear.weapon125Percent(project, Gear.Force)
      Gear.weapon125Percent(project, Gear.Tech)
    }

    if (wisp > 0 && salamander > 0 && total >= 3 && energy >= 8) {
      project.cards.pending = Cards.Noble.ManOfValor
    }
  }
}
