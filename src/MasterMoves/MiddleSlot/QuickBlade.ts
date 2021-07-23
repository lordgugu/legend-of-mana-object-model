import { MasterMove, MasterMoves } from 'MasterMoves'

export const QuickBlade: MasterMove = {
  id: 'QuickBlade',
  name: 'Quick Blade',
  slot: MasterMoves.Middle.Slot,
  effects: () => ['Attack Gauge +']
}
