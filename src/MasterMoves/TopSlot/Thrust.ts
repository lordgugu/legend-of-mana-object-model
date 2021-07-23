import { MasterMove, MasterMoves } from 'MasterMoves'

export const Thrust: MasterMove = {
  id: 'Thrust',
  name: 'Thrust',
  slot: MasterMoves.Top.Slot,
  effects: () => ['Default (Top Slot)']
}
