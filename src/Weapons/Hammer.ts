import { MasterMoves } from 'MasterMoves'
import { Weapon } from 'Weapons'

export const Hammer: Weapon = {
  id: 'Hammer',
  name: 'Hammer',
  attributes: {
    sharp: 8,
    heavy: 72,
    force: 64,
    tech: 16
  },
  markerThreshold: 3,
  priceCoefficient: 75,
  masterMoves: {
    top: MasterMoves.Top.Thrust,
    middle: MasterMoves.Middle.Uppercut,
    bottom: MasterMoves.Bottom.Jump
  },
  compatibleMasterMoves: {
    bottom: [
      MasterMoves.Bottom.MagmaHammer,
      MasterMoves.Bottom.Mjolnir,
      MasterMoves.Bottom.QuakeHammer,
      MasterMoves.Bottom.SledgeHammer
    ]
  }
}
