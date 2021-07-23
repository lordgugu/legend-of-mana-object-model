import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const Whalamato: ActiveItem = {
  id: 'Whalamato',
  name: 'Whalamato',
  category: Items.Produce.Category,
  energy: 32,
  activate: (project: Project) => {
    const { energy } = project
    const gnome = project.levels[Essences.Gnome]
    const undine = project.levels[Essences.Undine]

    Stats.widenRange(project, Stats.Constitution, -5, 10)
    Stats.setMinimum(project, Stats.Constitution, 10)

    if (gnome >= 3 && undine >= 3 && energy >= 8) {
      project.cards.pending = Cards.BeastGod.Narwhal
    }
  }
}
