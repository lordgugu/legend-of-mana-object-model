import { Cards } from 'Cards'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const StinkyBreath: ActiveItem = {
  id: 'StinkyBreath',
  name: 'Stinky Breath',
  category: Items.Vials.Category,
  energy: 16,
  activate: (project: Project) => {
    const { energy } = project

    if (project.type === Projects.Equipment) {
      Immunities.set(project, Immunities.Poison, Immunities.Confusion)
    }

    if (energy >= 4) {
      project.cards.pending = Cards.Pixie.PixieOfLust
    }
  }
}
