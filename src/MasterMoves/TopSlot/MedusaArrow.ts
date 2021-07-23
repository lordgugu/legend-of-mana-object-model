import { MasterMove, MasterMoves } from 'MasterMoves'

export const MedusaArrow: MasterMove = {
  id: 'MedusaArrow',
  name: 'Medusa Arrow',
  slot: MasterMoves.Top.Slot,
  effects: () => ['Petrification'],
  notes: () => ['Sacred Bow Exclusive']
}
