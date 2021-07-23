import { MasterMoves } from 'MasterMoves'
import { Weapon } from 'Weapons'

export const Flail: Weapon = {
  id: 'Flail',
  name: 'Flail',
  attributes: {
    sharp: 0,
    heavy: 40,
    force: 28,
    tech: 44
  },
  markerThreshold: 3,
  priceCoefficient: 40,
  masterMoves: {
    top: MasterMoves.Top.Thrust,
    middle: MasterMoves.Middle.Uppercut,
    bottom: MasterMoves.Bottom.Jump
  },
  compatibleMasterMoves: {
    top: [MasterMoves.Top.GreenPrincess],
    middle: [MasterMoves.Middle.GameOfDeath],
    bottom: [MasterMoves.Bottom.RedDream]
  }
}
