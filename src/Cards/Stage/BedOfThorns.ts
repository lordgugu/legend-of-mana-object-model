import { ActiveCard, Cards, CardSlot } from 'Cards'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { Specials } from 'Specials'

export const BedOfThorns: ActiveCard = {
  id: 'BedOfThorns',
  originalName: 'Bed of Thorn',
  remasteredName: 'Bed of Thorns',
  category: Cards.Stage.Category,
  price: 1500,
  activate: (project: Project, slot: CardSlot) => {
    switch (slot) {
      case Cards.Top:
      case Cards.Middle:
      case Cards.Bottom:
        Stats.All.forEach((stat) => Stats.widenRange(project, stat, -1, 3))

        if (project.type === Projects.Equipment) {
          project.special = Specials.NoHpRegeneration

          Gear.equipment150Percent(project, Gear.Strike)
          Gear.equipment150Percent(project, Gear.Slash)
          Gear.equipment150Percent(project, Gear.Pierce)
          Gear.equipment150Percent(project, Gear.Magic)
        }
        break
    }
  }
}
