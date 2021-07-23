import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const MoonCrystal: ActiveItem = {
  id: 'MoonCrystal',
  name: 'Moon Crystal',
  category: Items.MagicCrystals.Category,
  energy: 48,
  activate: (project: Project) => {
    const shade = project.levels[Essences.Shade]
    const total = Essences.total(project)

    if (shade >= 3 && total >= 5) {
      project.cards.pending = Cards.HeavenGod.MoonGoddess
    }

    Essences.taint(project, Essences.Shade)
  }
}
