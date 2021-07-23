import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'
import { Materials } from 'Materials'

export const AromaOil: ActiveItem = {
  id: 'AromaOil',
  name: 'Aroma Oil',
  category: Items.Bottles.Category,
  energy: 24,
  activate: (project: Project) => {
    const { energy } = project
    const total = Essences.total(project)

    if (project.type === Projects.Equipment && project.material.category === Materials.Hide.Category) {
      Gear.equipment150Percent(project, Gear.Strike)
      Gear.equipment150Percent(project, Gear.Slash)
      Gear.equipment150Percent(project, Gear.Pierce)
    }

    if (total >= 6 && energy >= 8) {
      project.cards.pending = Cards.HeavenGod.WisdomGoddess
    }
  }
}
