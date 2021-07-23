import { MasterMoves } from 'MasterMoves'
import { Weapon } from 'Weapons'

export const Spear: Weapon = {
  id: 'Spear',
  name: 'Spear',
  attributes: {
    sharp: 52,
    heavy: 20,
    force: 24,
    tech: 48
  },
  markerThreshold: 2,
  priceCoefficient: 60,
  masterMoves: {
    top: MasterMoves.Top.Thrust,
    middle: MasterMoves.Middle.Uppercut,
    bottom: MasterMoves.Bottom.Jump
  },
  compatibleMasterMoves: {
    top: [MasterMoves.Top.Gungnir, MasterMoves.Top.SpearOfLight, MasterMoves.Top.Trident]
  }
}
