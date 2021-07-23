import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const SpadeBasil: ActiveItem = {
  id: 'SpadeBasil',
  name: 'Spade Basil',
  category: Items.Produce.Category,
  energy: 16,
  activate: (project: Project) => {
    const { energy } = project
    const wisp = project.levels[Essences.Wisp]
    const total = Essences.total(project)

    if (project.type === Projects.Weapon) {
      Gear.weapon125Percent(project, Gear.Sharp)
    }

    if (wisp >= 3 && total >= 6 && energy >= 8) {
      project.cards.pending = Cards.HeavenGod.RulerOfTheSky
    }
  }
}
