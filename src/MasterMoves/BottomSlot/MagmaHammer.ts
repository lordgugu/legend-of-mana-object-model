import { MasterMove, MasterMoves } from 'MasterMoves'

export const MagmaHammer: MasterMove = {
  id: 'MagmaHammer',
  name: 'Magma Hammer',
  slot: MasterMoves.Bottom.Slot,
  effects: () => ['Salamander Damage', 'Aura Damage', 'Defense Up']
}
