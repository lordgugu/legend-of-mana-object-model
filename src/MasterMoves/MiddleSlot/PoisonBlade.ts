import { MasterMove, MasterMoves } from 'MasterMoves'

export const PoisonBlade: MasterMove = {
  id: 'PoisonBlade',
  name: 'Poison Blade',
  slot: MasterMoves.Middle.Slot,
  effects: () => ['Poison']
}
