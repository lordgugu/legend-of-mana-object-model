import { MasterMoves } from 'MasterMoves'
import { Weapon } from 'Weapons'

export const Staff: Weapon = {
  id: 'Staff',
  name: 'Staff',
  attributes: {
    sharp: 4,
    heavy: 44,
    force: 16,
    tech: 32
  },
  markerThreshold: 1,
  priceCoefficient: 30,
  masterMoves: {
    top: MasterMoves.Top.Thrust,
    middle: MasterMoves.Middle.Uppercut,
    bottom: MasterMoves.Bottom.Jump
  },
  compatibleMasterMoves: {
    top: [MasterMoves.Top.Caduceus],
    bottom: [MasterMoves.Bottom.Demonicide, MasterMoves.Bottom.Electrosceptre, MasterMoves.Bottom.GoldenTouch]
  }
}
