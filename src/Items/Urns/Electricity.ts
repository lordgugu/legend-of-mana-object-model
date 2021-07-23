import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Electricity: ActiveItem = {
  id: 'Electricity',
  name: 'Electricity',
  category: Items.Urns.Category,
  energy: 32,
  activate: (project: Project) => {
    const { energy } = project
    const wisp = project.levels[Essences.Wisp]
    const salamander = project.levels[Essences.Salamander]
    const jinn = project.levels[Essences.Jinn]

    if (wisp >= 3 && salamander >= 3 && jinn >= 3 && energy >= 8) {
      project.cards.pending = Cards.HeavenGod.ThunderGod
    }
  }
}
