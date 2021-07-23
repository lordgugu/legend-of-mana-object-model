import { MasterMove, MasterMoves } from 'MasterMoves'

export const Jump: MasterMove = {
  id: 'Jump',
  name: 'Jump',
  slot: MasterMoves.Bottom.Slot,
  effects: () => ['Default (Bottom Slot)']
}
