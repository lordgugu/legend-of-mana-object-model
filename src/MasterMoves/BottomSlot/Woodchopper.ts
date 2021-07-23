import { MasterMove, MasterMoves } from 'MasterMoves'

export const Woodchopper: MasterMove = {
  id: 'Woodchopper',
  name: 'Woodchopper',
  slot: MasterMoves.Bottom.Slot,
  effects: () => ['Plant Damage +']
}
