import { MasterMove, MasterMoves } from 'MasterMoves'

export const Shot: MasterMove = {
  id: 'Shot',
  name: 'Shot',
  slot: MasterMoves.Top.Slot,
  effects: () => ['Default (Top Slot)']
}
