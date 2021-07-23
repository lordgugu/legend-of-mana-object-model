import { MasterMove, MasterMoves } from 'MasterMoves'

export const ChaoticAvenger: MasterMove = {
  id: 'ChaoticAvenger',
  name: 'Chaotic Avenger',
  slot: MasterMoves.Top.Slot,
  effects: () => ['Salamander Damage', 'Gnome Damage', 'Jinn Damage', 'Undine Damage', 'Attack Gauge +']
}
