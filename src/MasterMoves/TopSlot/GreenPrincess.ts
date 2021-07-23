import { MasterMove, MasterMoves } from 'MasterMoves'

export const GreenPrincess: MasterMove = {
  id: 'GreenPrincess',
  name: 'Green Princess',
  slot: MasterMoves.Top.Slot,
  effects: () => ['Defense Up', 'Attack Gauge +']
}
