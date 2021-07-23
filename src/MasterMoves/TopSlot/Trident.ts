import { MasterMove, MasterMoves } from 'MasterMoves'

export const Trident: MasterMove = {
  id: 'Trident',
  name: 'Trident',
  slot: MasterMoves.Top.Slot,
  effects: () => ['Aquatic Damage +', 'Confusion vs. Aquatic']
}
