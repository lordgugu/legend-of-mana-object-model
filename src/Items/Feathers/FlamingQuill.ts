import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const FlamingQuill: ActiveItem = {
  id: 'FlamingQuill',
  name: 'Flaming Quill',
  category: Items.Feathers.Category,
  energy: 64,
  activate: (project: Project) => {
    const { energy } = project
    const salamander = project.levels[Essences.Salamander]
    const jinn = project.levels[Essences.Jinn]

    Stats.widenRange(project, Stats.Power, -3, 5)
    Stats.setMinimum(project, Stats.Power, 5)

    if (salamander >= 3 && jinn >= 3 && energy >= 4) {
      project.cards.pending = Cards.BeastGod.Phoenix
    }
  }
}
