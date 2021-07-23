import { MasterMoves } from 'MasterMoves'
import { Weapon } from 'Weapons'

export const Glove: Weapon = {
  id: 'Glove',
  name: 'Glove',
  attributes: {
    sharp: 0,
    heavy: 32,
    force: 24,
    tech: 56
  },
  markerThreshold: 2,
  priceCoefficient: 40,
  masterMoves: {
    top: MasterMoves.Top.Thrust,
    middle: MasterMoves.Middle.Uppercut,
    bottom: MasterMoves.Bottom.Jump
  },
  compatibleMasterMoves: {
    middle: [MasterMoves.Middle.HandOfMidas]
  }
}
