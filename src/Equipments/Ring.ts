import { Cards } from 'Cards'
import { ActiveEquipment } from 'Equipments'
import { AlteredArmor } from 'Forge/Projects'
import { Specials } from 'Specials'

export const Ring: ActiveEquipment = {
  id: 'Ring',
  name: 'Ring',
  attributes: {
    strike: 1,
    slash: 1,
    pierce: 1,
    magic: 16
  },
  markerThreshold: 1,
  priceCoefficient: 5,
  compatibleSpecials: [
    Specials.AutoRevive,
    Specials.ExtraLucre,
    Specials.FastRevive,
    Specials.NoHpRegeneration,
    Specials.NoReviveMoveHpRegeneration,
    Specials.ShareExperience
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
