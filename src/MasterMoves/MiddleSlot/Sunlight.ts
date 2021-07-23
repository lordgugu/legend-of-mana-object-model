import { MasterMove, MasterMoves } from 'MasterMoves'

export const Sunlight: MasterMove = {
  id: 'Sunlight',
  name: 'Sunlight',
  slot: MasterMoves.Middle.Slot,
  effects: () => ['Undead Damage +', 'Flameburst vs. Undead']
}
