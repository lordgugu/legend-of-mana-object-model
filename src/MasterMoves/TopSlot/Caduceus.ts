import { MasterMove, MasterMoves } from 'MasterMoves'

export const Caduceus: MasterMove = {
  id: 'Caduceus',
  name: 'Caduceus',
  slot: MasterMoves.Top.Slot,
  effects: () => ['Insect Damage +', 'Paralysis vs. Insect']
}
