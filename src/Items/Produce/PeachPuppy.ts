import { Cards } from 'Cards'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const PeachPuppy: ActiveItem = {
  id: 'PeachPuppy',
  name: 'Peach Puppy',
  category: Items.Produce.Category,
  energy: 24,
  activate: (project: Project) => {
    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Unspecified.Wolf
    }

    if (project.type === Projects.Weapon) {
      Gear.weapon125Percent(project, Gear.Sharp)
      Gear.weapon075Percent(project, Gear.Heavy)
    }
  }
}
