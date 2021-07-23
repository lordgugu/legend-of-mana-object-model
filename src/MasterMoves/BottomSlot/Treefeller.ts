import { MasterMove, MasterMoves } from 'MasterMoves'

export const Treefeller: MasterMove = {
  id: 'Treefeller',
  name: 'Treefeller',
  slot: MasterMoves.Bottom.Slot,
  effects: () => ['Plant Damage +', 'Dizzy vs. Plant']
}
