import { MasterMove, MasterMoves } from 'MasterMoves'

export const Gungnir: MasterMove = {
  id: 'Gungnir',
  name: 'Gungnir',
  slot: MasterMoves.Top.Slot,
  effects: () => ['Spirit Up', 'Attack Gauge +']
}
