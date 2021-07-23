import { MasterMoves } from 'MasterMoves'
import { Weapon } from 'Weapons'

export const TwoHandedAxe: Weapon = {
  id: 'TwoHandedAxe',
  name: '2H Axe',
  attributes: {
    sharp: 40,
    heavy: 40,
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
    bottom: [MasterMoves.Bottom.Treefeller]
  }
}
