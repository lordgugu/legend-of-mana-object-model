import { MasterMove, MasterMoves } from 'MasterMoves'

export const Mjolnir: MasterMove = {
  id: 'Mjolnir',
  name: 'Mjolnir',
  slot: MasterMoves.Bottom.Slot,
  effects: () => ['Salamander Damage', 'Jinn Damage', 'Attack Gauge +']
}
