import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { Specials } from 'Specials'

export const HeavensScale: ActiveCard = {
  id: 'HeavensScale',
  name: "Heaven's Scale",
  category: Cards.World.Category,
  price: 1800,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Hidden:
        const { worldPower } = project

        if (worldPower !== undefined && worldPower !== Cards.Stage.BedOfThorns) {
          project.cards.hidden = undefined
        }

        break
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        if (project.type === Projects.Equipment) {
          project.special = Specials.NoReviveMoveHpRegeneration
        }

        break
    }
  }
}
