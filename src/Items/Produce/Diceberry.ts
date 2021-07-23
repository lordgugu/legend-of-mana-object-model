import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const Diceberry: ActiveItem = {
  id: 'Diceberry',
  name: 'Diceberry',
  category: Items.Produce.Category,
  energy: 16,
  activate: (project: Project) => {
    const jinn = project.levels[Essences.Jinn]
    const total = Essences.total(project)

    if (jinn >= 3 && total >= 5) {
      project.cards.pending = Cards.HeavenGod.WindGod
    }

    Stats.increment(project, Stats.Luck)
  }
}
