import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const MirrorPiece: ActiveItem = {
  id: 'MirrorPiece',
  name: 'Mirror Piece',
  category: Items.Pouch.Category,
  energy: 24,
  activate: (project: Project) => {
    const { energy } = project
    const total = Essences.total(project)

    if (total >= 3 && energy >= 8) {
      project.cards.pending = Cards.World.MirroredWorld
    }
  }
}
