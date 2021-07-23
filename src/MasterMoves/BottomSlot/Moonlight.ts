import { MasterMove, MasterMoves } from 'MasterMoves'

export const Moonlight: MasterMove = {
  id: 'Moonlight',
  name: 'Moonlight',
  slot: MasterMoves.Bottom.Slot,
  effects: () => ['Aquatic Damage +', 'Sleep vs. Aquatic']
}
