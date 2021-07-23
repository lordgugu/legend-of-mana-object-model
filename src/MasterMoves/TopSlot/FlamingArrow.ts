import { MasterMove, MasterMoves } from 'MasterMoves'

export const FlamingArrow: MasterMove = {
  id: 'FlamingArrow',
  name: 'Flaming Arrow',
  slot: MasterMoves.Top.Slot,
  effects: () => ['Salamander Damage', 'Flameburst'],
  notes: () => ['Sidewinder Exclusive']
}
