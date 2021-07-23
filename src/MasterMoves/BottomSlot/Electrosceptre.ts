import { MasterMove, MasterMoves } from 'MasterMoves'

export const Electrosceptre: MasterMove = {
  id: 'Electrosceptre',
  name: 'Electrosceptre',
  slot: MasterMoves.Bottom.Slot,
  effects: () => ['Salamander Damage', 'Jinn Damage']
}
