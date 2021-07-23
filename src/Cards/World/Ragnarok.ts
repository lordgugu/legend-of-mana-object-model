import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Project, Projects } from 'Forge/Projects'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const Ragnarok: ActiveCard = {
  id: 'Ragnarok',
  name: 'Ragnarok',
  category: Cards.World.Category,
  price: 10000,
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
        if (project.type === Projects.Weapon && project.gear === Weapons.TwoHandedSword) {
          project.masterMoves.bottom = MasterMoves.Bottom.Ragnarok
        }

        break
    }
  }
}
