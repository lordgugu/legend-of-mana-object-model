import { Cards } from 'Cards'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const MothWing: ActiveItem = {
  id: 'MothWing',
  name: 'Moth Wing',
  category: Items.Feathers.Category,
  energy: 32,
  activate: (project: Project) => {
    const { energy } = project

    if (project.type === Projects.Equipment) {
      Gear.equipment075Percent(project, Gear.Strike)
      Gear.equipment075Percent(project, Gear.Slash)
      Gear.equipment075Percent(project, Gear.Pierce)
      Gear.equipment150Percent(project, Gear.Magic)
    }

    if (energy >= 8) {
      project.cards.pending = Cards.Spirit.SpiritOfForest
    }
  }
}
