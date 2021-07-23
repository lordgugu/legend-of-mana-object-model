import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const WhiteFeather: ActiveItem = {
  id: 'WhiteFeather',
  name: 'White Feather',
  category: Items.Feathers.Category,
  energy: 32,
  activate: (project: Project) => {
    const { energy } = project
    const wisp = project.levels[Essences.Wisp]
    const total = Essences.total(project)

    Stats.widenRange(project, Stats.Skill, -3, 5)
    Stats.setMinimum(project, Stats.Skill, 5)

    if (wisp > 0 && total >= 3 && energy >= 8) {
      project.cards.pending = Cards.Maiden.Valkyrie
    }
  }
}
