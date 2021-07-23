import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const Clown: ActiveCard = {
  id: 'Clown',
  name: 'Clown',
  category: Cards.Unspecified.Category,
  price: 250,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        const { top, middle, bottom } = project.cards

        if (Array.of(top, middle, bottom).includes(Cards.Stage.Metropolis)) {
          Stats.All.forEach((stat) => Stats.widenRange(project, stat, -5, 12))
        } else {
          Stats.All.forEach((stat) => Stats.widenRange(project, stat, -3, 9))
        }

        switch (project.type) {
          case Projects.Weapon:
            if (project.gear === Weapons.Knife) {
              project.masterMoves.middle = MasterMoves.Middle.QuickBlade
            }

            Gear.weapon150Percent(project, Gear.Sharp)
            Gear.weapon050Percent(project, Gear.Heavy)
            break

          case Projects.Equipment:
            Gear.equipment150Percent(project, Gear.Pierce)
            Gear.equipment050Percent(project, Gear.Strike)
            break
        }

        break
    }
  }
}
