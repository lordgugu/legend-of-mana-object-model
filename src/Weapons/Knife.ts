import { MasterMoves } from 'MasterMoves'
import { Weapon } from 'Weapons'

export const Knife: Weapon = {
  id: 'Knife',
  name: 'Knife',
  attributes: {
    sharp: 44,
    heavy: 16,
    force: 12,
    tech: 48
  },
  markerThreshold: 1,
  priceCoefficient: 45,
  masterMoves: {
    top: MasterMoves.Top.Thrust,
    middle: MasterMoves.Middle.Uppercut,
    bottom: MasterMoves.Bottom.Jump
  },
  compatibleMasterMoves: {
    middle: [MasterMoves.Middle.PoisonBlade, MasterMoves.Middle.QuickBlade],
    bottom: [MasterMoves.Bottom.SinisterBlade]
  }
}
