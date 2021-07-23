import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const DragonBlood: ActiveItem = {
  id: 'DragonBlood',
  name: 'Dragon Blood',
  category: Items.Bottles.Category,
  energy: 64,
  activate: (project: Project) => {
    const { energy } = project
    const { salamander } = project.levels
    const total = Essences.total(project)

    Stats.All.forEach((stat) => Stats.increment(project, stat))

    if (salamander >= 3 && total >= 5 && energy >= 8) {
      project.cards.pending = Cards.HeavenGod.GodOfWar
    }
  }
}
