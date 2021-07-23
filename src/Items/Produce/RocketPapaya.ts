import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const RocketPapaya: ActiveItem = {
  id: 'RocketPapaya',
  name: 'Rocket Papaya',
  category: Items.Produce.Category,
  energy: 64,
  activate: (project: Project) => {
    const { energy } = project
    const wisp = project.levels[Essences.Wisp]
    const jinn = project.levels[Essences.Jinn]

    Stats.widenRange(project, Stats.Charm, -5, 10)
    Stats.increment(project, Stats.Charm)

    if (jinn === 0 && wisp > 0 && energy >= 8) {
      project.cards.pending = Cards.Stage.Tower
    }
  }
}
