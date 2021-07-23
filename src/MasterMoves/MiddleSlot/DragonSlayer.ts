import { MasterMove, MasterMoves } from 'MasterMoves'

export const DragonSlayer: MasterMove = {
  id: 'DragonSlayer',
  name: 'Dragon Slayer',
  slot: MasterMoves.Middle.Slot,
  effects: () => ['Dragon Damage +', 'Sleep vs. Dragon']
}
