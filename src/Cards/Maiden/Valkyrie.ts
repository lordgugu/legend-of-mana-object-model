import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Equipments } from 'Equipments'
import { Project, Projects } from 'Forge/Projects'
import { Specials } from 'Specials'

export const Valkyrie: ActiveCard = {
  id: 'Valkyrie',
  originalName: 'Nymph of the Sky',
  remasteredName: 'Valkyrie',
  category: Cards.Maiden.Category,
  price: 1000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        if (project.type === Projects.Equipment && project.gear === Equipments.Mantle) {
          project.special = Specials.MoveHpRegeneration
        }
        break
    }
  }
}
