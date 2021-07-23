import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const OrangeOpus: ActiveItem = {
  id: 'OrangeOpus',
  name: "Orange'opus",
  category: Items.Produce.Category,
  energy: 64,
  activate: (project: Project) => {
    const { energy } = project
    const salamander = project.levels[Essences.Salamander]
    const gnome = project.levels[Essences.Gnome]

    Stats.widenRange(project, Stats.Defense, -5, 10)
    Stats.increment(project, Stats.Defense)

    if (salamander === 0 && gnome >= 5 && energy >= 8) {
      project.cards.pending = Cards.EvilGod.Leviathan
    }
  }
}
