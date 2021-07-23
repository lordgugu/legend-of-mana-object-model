import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Equipments } from 'Equipments'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { MasterMoves } from 'MasterMoves'
import { Weapons } from 'Weapons'

export const WindGod: ActiveCard = {
  id: 'WindGod',
  name: 'Wind God',
  category: Cards.HeavenGod.Category,
  price: 3000,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.widenRange(project, Stats.Skill, -5, 10)
        Stats.setMinimum(project, Stats.Skill, 10)

        switch (project.type) {
          case Projects.Weapon:
            if (project.gear === Weapons.Staff) {
              project.masterMoves.top = MasterMoves.Top.Caduceus
            }
            break
          case Projects.Equipment:
            if (project.gear === Equipments.Shoes) {
              project.attributes.strike += 10
              project.attributes.slash += 10
              project.attributes.pierce += 10
              project.attributes.magic += 10

              Immunities.add(project, Immunities.Paralysis)
            }
            break
        }

        break
    }
  }
}
