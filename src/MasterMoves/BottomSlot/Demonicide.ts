import { MasterMove, MasterMoves } from 'MasterMoves'

export const Demonicide: MasterMove = {
  id: 'Demonicide',
  name: 'Demonicide',
  slot: MasterMoves.Bottom.Slot,
  effects: () => ['Demon Damage +', 'Flameburst vs. Demon']
}
