import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const OceanGod: ActiveCard = {
  id: 'OceanGod',
  name: 'Ocean God',
  category: Cards.HeavenGod.Category,
  price: 3000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.widenRange(project, Stats.Power, -3, 9)
        Stats.widenRange(project, Stats.Skill, -3, 9)

        Stats.setMinimum(project, Stats.Power, 7)
        Stats.setMinimum(project, Stats.Skill, 7)

        switch (project.type) {
          case Projects.Weapon:
            if (project.gear === Weapons.Spear) {
              project.masterMoves.top = MasterMoves.Top.Trident
            }
            break
          case Projects.Equipment:
            Immunities.add(project, Immunities.Flameburst)
            break
        }

        break
    }
  }
}
