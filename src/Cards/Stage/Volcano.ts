import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Equipments } from 'Equipments'
import { Gear } from 'Forge/Gear'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const Volcano: ActiveCard = {
  id: 'Volcano',
  name: 'Volcano',
  category: Cards.Stage.Category,
  price: 1300,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        switch (project.type) {
          case Projects.Weapon:
            Gear.weapon150Percent(project, Gear.Force)
            Gear.weapon050Percent(project, Gear.Tech)

            if (project.gear === Weapons.Hammer) {
              project.masterMoves.bottom = MasterMoves.Bottom.MagmaHammer
            }

            break
          case Projects.Equipment:
            if (project.gear === Equipments.Hauberk) {
              Immunities.add(project, Immunities.Freeze)
            }

            break
        }

        break
    }
  }
}
