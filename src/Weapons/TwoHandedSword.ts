import { MasterMoves } from 'MasterMoves'
import { Weapon } from 'Weapons'

export const TwoHandedSword: Weapon = {
  id: 'TwoHandedSword',
  name: '2H Sword',
  attributes: {
    sharp: 40,
    heavy: 40,
    force: 40,
    tech: 40
  },
  markerThreshold: 2,
  priceCoefficient: 75,
  masterMoves: {
    top: MasterMoves.Top.Thrust,
    middle: MasterMoves.Middle.Uppercut,
    bottom: MasterMoves.Bottom.Jump
  },
  compatibleMasterMoves: {
    top: [MasterMoves.Top.ChaoticAvenger],
    bottom: [MasterMoves.Bottom.Ragnarok]
  }
}
