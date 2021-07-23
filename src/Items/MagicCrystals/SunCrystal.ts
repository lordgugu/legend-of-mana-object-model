import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const SunCrystal: ActiveItem = {
  id: 'SunCrystal',
  name: 'Sun Crystal',
  category: Items.MagicCrystals.Category,
  energy: 48,
  activate: (project: Project) => {
    const { energy } = project
    const wisp = project.levels[Essences.Wisp]
    const total = Essences.total(project)

    if (wisp >= 3 && total >= 5 && energy >= 8) {
      project.cards.pending = Cards.HeavenGod.SunGod
    }

    Essences.taint(project, Essences.Wisp)
  }
}
