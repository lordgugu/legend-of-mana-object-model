import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const EarOfWheat: ActiveItem = {
  id: 'EarOfWheat',
  name: 'Ear of Wheat',
  category: Items.Urns.Category,
  energy: 24,
  activate: (project: Project) => {
    const { energy } = project
    const dryad = project.levels[Essences.Dryad]
    const total = Essences.total(project)

    if (dryad >= 3 && total >= 5 && energy >= 8) {
      project.cards.pending = Cards.HeavenGod.FertilityGoddess
    }
  }
}
