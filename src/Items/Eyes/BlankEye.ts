import { Cards } from 'Cards'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const BlankEye: ActiveItem = {
  id: 'BlankEye',
  name: 'Blank Eye',
  category: Items.Eyes.Category,
  energy: 32,
  activate: (project: Project) => {
    const { energy } = project

    if (project.type === Projects.Weapon) {
      Gear.weapon125Percent(project, Gear.Tech)
    }

    if (energy >= 4) {
      project.cards.pending = Cards.Pixie.PixieOfEnvy
    }
  }
}
