import { Cards } from 'Cards'
import { Equipments } from 'Equipments'
import { Essences } from 'Forge/Essences'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const BlackenedBat: ActiveItem = {
  id: 'BlackenedBat',
  name: 'Blackened Bat',
  category: Items.Pellets.Category,
  energy: 48,
  activate: (project: Project) => {
    const { energy } = project
    const wisp = project.levels[Essences.Wisp]
    const shade = project.levels[Essences.Shade]

    if (project.type === Projects.Equipment && project.gear === Equipments.Pendant) {
      Immunities.add(project, Immunities.Darkness)
    }

    if (shade === 0 && wisp >= 5 && energy >= 8) {
      project.cards.pending = Cards.EvilGod.WingsOfDarkness
    }
  }
}
