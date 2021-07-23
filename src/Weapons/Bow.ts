import { Cards } from 'Cards'
import { TemperedWeapon } from 'Forge/Projects'
import { MasterMoves } from 'MasterMoves'
import { ActiveWeapon } from 'Weapons'

export const Bow: ActiveWeapon = {
  id: 'Bow',
  name: 'Bow',
  attributes: {
    sharp: 40,
    heavy: 4,
    force: 20,
    tech: 40
  },
  markerThreshold: 1,
  priceCoefficient: 35,
  masterMoves: {
    top: MasterMoves.Top.Shot,
    middle: MasterMoves.Middle.DoubleShot,
    bottom: MasterMoves.Bottom.Jump
  },
  compatibleMasterMoves: {
    top: [
      MasterMoves.Top.FlamingArrow,
      MasterMoves.Top.Icicle,
      MasterMoves.Top.MagicalShot,
      MasterMoves.Top.MedusaArrow,
      MasterMoves.Top.PhoenixFalling,
      MasterMoves.Top.SolarFlare
    ],
    middle: [MasterMoves.Middle.ElvenArcher, MasterMoves.Middle.LunarShot]
  },
  activate: (project: TemperedWeapon) => {
    const { top, middle, bottom } = project.cards

    let witch = false
    let raven = false
    let wolf = false

    Array.of(top, middle, bottom).forEach((slot) => {
      switch (slot) {
        case Cards.Unspecified.Witch:
          witch = true
          break
        case Cards.Unspecified.Raven:
          raven = true
          break
        case Cards.Unspecified.Wolf:
          wolf = true
          break
        default:
          return
      }
    })

    if (witch && raven && wolf) {
      project.masterMoves.top = MasterMoves.Top.MagicalShot
    }
  }
}
