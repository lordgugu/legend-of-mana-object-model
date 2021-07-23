import { MasterMove, MasterMoves } from 'MasterMoves'

export const Icicle: MasterMove = {
  id: 'Icicle',
  name: 'Icicle',
  slot: MasterMoves.Top.Slot,
  effects: () => ['Undine Damage', 'Freeze'],
  notes: () => ['Waveruck Exclusive']
}
