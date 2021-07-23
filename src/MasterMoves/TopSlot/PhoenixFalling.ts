import { MasterMove, MasterMoves } from 'MasterMoves'

export const PhoenixFalling: MasterMove = {
  id: 'PhoenixFalling',
  name: 'Phoenix Falling',
  slot: MasterMoves.Top.Slot,
  effects: () => ['Aerial Damage +', 'Flameburst vs. Aerial']
}
