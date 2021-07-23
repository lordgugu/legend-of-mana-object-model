import { Cards } from 'Cards'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const AngryEye: ActiveItem = {
  id: 'AngryEye',
  name: 'Angry Eye',
  category: Items.Eyes.Category,
  energy: 32,
  activate: (project: Project) => {
    const { energy } = project

    if (project.type === Projects.Weapon) {
      Gear.weapon125Percent(project, Gear.Force)
    }

    if (energy >= 4) {
      project.cards.pending = Cards.Pixie.PixieOfWrath
    }
  }
}
