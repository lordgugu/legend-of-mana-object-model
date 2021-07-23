import { MasterMove, MasterMoves } from 'MasterMoves'

export const RedDream: MasterMove = {
  id: 'RedDream',
  name: 'Red Dream',
  slot: MasterMoves.Bottom.Slot,
  effects: () => ['Power Up', 'Attack Gauge +']
}
