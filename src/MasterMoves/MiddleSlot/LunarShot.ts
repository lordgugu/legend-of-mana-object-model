import { MasterMove, MasterMoves } from 'MasterMoves'

export const LunarShot: MasterMove = {
  id: 'LunarShot',
  name: 'Lunar Shot',
  slot: MasterMoves.Middle.Slot,
  effects: () => ['Shade Damage']
}
