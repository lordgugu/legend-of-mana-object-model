import { MasterMove, MasterMoves } from 'MasterMoves'

export const QuakeHammer: MasterMove = {
  id: 'QuakeHammer',
  name: 'Quake Hammer',
  slot: MasterMoves.Bottom.Slot,
  effects: () => ['Aura Damage', 'Gnome Damage', 'Defense Up']
}
