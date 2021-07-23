import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const Cleric: ActiveCard = {
  id: 'Cleric',
  name: 'Cleric',
  category: Cards.Unspecified.Category,
  price: 500,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        const { top, middle, bottom } = project.cards

        if (Array.of(top, middle, bottom).includes(Cards.Stage.Metropolis)) {
          Stats.All.forEach((stat) => Stats.widenRange(project, stat, -3, 5))

          Stats.increment(project, Stats.Magic)
          Stats.increment(project, Stats.Spirit)
          Stats.increment(project, Stats.Charm)
        } else {
          Stats.All.forEach((stat) => Stats.widenRange(project, stat, -1, 3))

          Stats.increment(project, Stats.Spirit)
        }

        switch (project.type) {
          case Projects.Weapon:
            if (project.gear === Weapons.Staff) {
              project.masterMoves.bottom = MasterMoves.Bottom.Demonicide
            }

            Gear.weapon050Percent(project, Gear.Sharp)
            Gear.weapon150Percent(project, Gear.Heavy)
            break

          case Projects.Equipment:
            Gear.equipment050Percent(project, Gear.Slash)
            Gear.equipment150Percent(project, Gear.Strike)
            break
        }

        break
    }
  }
}
