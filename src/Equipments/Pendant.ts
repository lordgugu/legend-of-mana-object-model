import { Cards } from 'Cards'
import { ActiveEquipment } from 'Equipments'
import { AlteredArmor } from 'Forge/Projects'
import { Specials } from 'Specials'

export const Pendant: ActiveEquipment = {
  id: 'Pendant',
  name: 'Pendant',
  attributes: {
    strike: 0,
    slash: 0,
    pierce: 0,
    magic: 24
  },
  markerThreshold: 1,
  priceCoefficient: 5,
  compatibleSpecials: [
    Specials.AutoRevive,
    Specials.ExtraLucre,
    Specials.FastRevive,
    Specials.NoHpRegeneration,
    Specials.NoReviveMoveHpRegeneration
  ],
  activate: (project: AlteredArmor): void => {
    const { special } = project
    const { hidden, top, middle, bottom } = project.cards

    if (special !== Specials.AutoRevive) {
      return
    }

    if (hidden === Cards.BeastGod.Phoenix || !Array.of(top, middle, bottom).includes(Cards.BeastGod.Phoenix)) {
      project.special = undefined
    }
  }
}
