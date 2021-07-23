import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const DamselsSigh: ActiveItem = {
  id: 'DamselsSigh',
  originalName: "Virgin's Sigh",
  remasteredName: "Damsel's Sigh",
  category: Items.Vials.Category,
  energy: 16,
  activate: (project: Project) => {
    const { energy } = project
    const shade = project.levels[Essences.Shade]
    const dryad = project.levels[Essences.Dryad]

    if (shade >= 3 && dryad >= 3 && energy >= 8) {
      project.cards.pending = Cards.HeavenGod.LoveGoddess
    }
  }
}
