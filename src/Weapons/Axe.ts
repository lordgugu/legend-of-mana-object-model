import { MasterMoves } from 'MasterMoves'
import { Weapon } from 'Weapons'

export const Axe: Weapon = {
  id: 'Axe',
  name: 'Axe',
  attributes: {
    sharp: 28,
    heavy: 36,
    force: 48,
    tech: 16
  },
  markerThreshold: 2,
  priceCoefficient: 50,
  masterMoves: {
    top: MasterMoves.Top.Thrust,
    middle: MasterMoves.Middle.Uppercut,
    bottom: MasterMoves.Bottom.Jump
  },
  compatibleMasterMoves: {
    middle: [MasterMoves.Middle.DragonSlayer],
    bottom: [MasterMoves.Bottom.Woodchopper]
  }
}
