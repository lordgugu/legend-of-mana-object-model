import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Needlettuce: ActiveItem = {
  id: 'Needlettuce',
  name: 'Needlettuce',
  category: Items.Produce.Category,
  energy: 24,
  activate: (project: Project) => {
    const { energy } = project
    const salamander = project.levels[Essences.Salamander]
    const dryad = project.levels[Essences.Dryad]

    if (project.type === Projects.Weapon) {
      Gear.weapon125Percent(project, Gear.Sharp)
      Gear.weapon075Percent(project, Gear.Heavy)
    }

    if (salamander === 0 && dryad > 0 && energy >= 8) {
      project.cards.pending = Cards.Stage.BedOfThorns
    }
  }
}
