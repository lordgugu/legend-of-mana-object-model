import { Cards } from 'Cards'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const LittleEye: ActiveItem = {
  id: 'LittleEye',
  name: 'Little Eye',
  category: Items.Eyes.Category,
  energy: 32,
  activate: (project: Project) => {
    const { energy } = project

    if (project.type === Projects.Equipment) {
      Gear.equipment125Percent(project, Gear.Slash)
    }

    if (energy >= 4) {
      project.cards.pending = Cards.Pixie.PixieOfPride
    }
  }
}
