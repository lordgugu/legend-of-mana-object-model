import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const HeartMint: ActiveItem = {
  id: 'HeartMint',
  name: 'Heart Mint',
  category: Items.Produce.Category,
  energy: 8,
  activate: (project: Project) => {
    const { energy } = project
    const shade = project.levels[Essences.Shade]
    const gnome = project.levels[Essences.Gnome]
    const undine = project.levels[Essences.Undine]

    Stats.widenRange(project, Stats.Charm, -1, 3)
    Stats.increment(project, Stats.Charm)

    if (shade >= 2 && gnome >= 2 && undine >= 2 && energy >= 8) {
      project.cards.pending = Cards.HeavenGod.MotherOfGods
    }
  }
}
