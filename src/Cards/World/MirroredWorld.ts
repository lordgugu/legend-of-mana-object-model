import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project } from 'Forge/Projects'

export const MirroredWorld: ActiveCard = {
  id: 'MirroredWorld',
  name: 'Mirrored World',
  category: Cards.World.Category,
  price: 2200,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Hidden:
        const { worldPower } = project

        if (worldPower !== undefined && worldPower !== Cards.Stage.BedOfThorns) {
          project.cards.hidden = undefined
        }

        break
    }
  }
}
