import { Cards } from 'Cards'
import { Equipments } from 'Equipments'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const LoquatShoe: ActiveItem = {
  id: 'LoquatShoe',
  originalName: 'Loquat-Shoes',
  remasteredName: 'Loquat-Shoe',
  category: Items.Produce.Category,
  energy: 16,
  activate: (project: Project) => {
    const { energy } = project

    if (project.type === Projects.Equipment) {
      switch (project.gear) {
        case Equipments.Boots:
        case Equipments.Shoes:
          Gear.equipment125Percent(project, Gear.Strike)
          Gear.equipment125Percent(project, Gear.Slash)
          Gear.equipment125Percent(project, Gear.Pierce)
          break
      }
    }

    if (energy >= 16) {
      project.cards.pending = Cards.Spirit.SpiritOfShoes
    }
  }
}
