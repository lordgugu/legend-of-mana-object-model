import { MasterMove, MasterMoves } from 'MasterMoves'

export const ElvenArcher: MasterMove = {
  id: 'ElvenArcher',
  name: 'Elven Archer',
  slot: MasterMoves.Middle.Slot,
  effects: () => ['Paralysis']
}
