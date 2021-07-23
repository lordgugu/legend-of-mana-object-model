import { MasterMove, MasterMoves } from 'MasterMoves'

export const Vampsword: MasterMove = {
  id: 'Vampsword',
  name: 'Vampsword',
  slot: MasterMoves.Middle.Slot,
  effects: () => ['Absorbs 25% of Damage Dealt']
}
