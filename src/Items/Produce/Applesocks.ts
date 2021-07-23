import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const Applesocks: ActiveItem = {
  id: 'Applesocks',
  name: 'Applesocks',
  category: Items.Produce.Category,
  energy: 64,
  activate: (project: Project) => {
    const { energy } = project
    const total = Essences.total(project)

    Stats.widenRange(project, Stats.Skill, -5, 10)
    Stats.increment(project, Stats.Skill)

    if (total >= 5 && energy >= 16) {
      project.cards.hidden = Cards.Maiden.NymphOfOrchards
    }
  }
}
