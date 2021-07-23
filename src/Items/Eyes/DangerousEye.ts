import { Cards } from 'Cards'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const DangerousEye: ActiveItem = {
  id: 'DangerousEye',
  name: 'Dangerous Eye',
  category: Items.Eyes.Category,
  energy: 32,
  activate: (project: Project) => {
    const { energy } = project

    if (project.type === Projects.Equipment) {
      Gear.equipment125Percent(project, Gear.Strike)
    }

    if (energy >= 4) {
      project.cards.pending = Cards.Pixie.PixieOfGreed
    }
  }
}
