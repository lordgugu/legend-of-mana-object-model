import { MasterMove, MasterMoves } from 'MasterMoves'

export const FlameTongue: MasterMove = {
  id: 'FlameTongue',
  name: 'Flame Tongue',
  slot: MasterMoves.Middle.Slot,
  effects: () => ['Salamander Damage', 'Flameburst']
}
