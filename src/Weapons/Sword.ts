import { MasterMoves } from 'MasterMoves'
import { Weapon } from 'Weapons'

export const Sword: Weapon = {
  id: 'Sword',
  name: 'Sword',
  attributes: {
    sharp: 32,
    heavy: 32,
    force: 32,
    tech: 32
  },
  markerThreshold: 1,
  priceCoefficient: 50,
  masterMoves: {
    top: MasterMoves.Top.Thrust,
    middle: MasterMoves.Middle.Uppercut,
    bottom: MasterMoves.Bottom.Jump
  },
  compatibleMasterMoves: {
    middle: [MasterMoves.Middle.FlameTongue, MasterMoves.Middle.Sunlight, MasterMoves.Middle.Vampsword],
    bottom: [MasterMoves.Bottom.Moonlight]
  }
}
