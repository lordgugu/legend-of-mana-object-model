import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const Ether: ActiveItem = {
  id: 'Ether',
  name: 'Ether',
  category: Items.Bottles.Category,
  energy: 8,
  activate: (project: Project) => {
    const { energy } = project
    const aura = project.levels[Essences.Aura]
    const gnome = project.levels[Essences.Gnome]

    if (aura >= 3 && gnome >= 3 && energy >= 8) {
      project.cards.pending = Cards.HeavenGod.BlacksmithGod
    }

    if (aura < 3 || gnome < 3) {
      project.cards.pending = Cards.Spirit.SpiritOfMountain
    }
  }
}
