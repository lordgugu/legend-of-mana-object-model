import { Cards } from 'Cards'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const GhostsHowl: ActiveItem = {
  id: 'GhostsHowl',
  name: "Ghost's Howl",
  category: Items.Vials.Category,
  energy: 32,
  activate: (project: Project) => {
    const { energy } = project

    if (energy >= 8) {
      project.cards.pending = Cards.Maiden.SacrificedNymph
    }
  }
}
