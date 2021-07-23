import { MasterMove, MasterMoves } from 'MasterMoves'

export const HandOfMidas: MasterMove = {
  id: 'HandOfMidas',
  name: 'Hand of Midas',
  slot: MasterMoves.Middle.Slot,
  effects: () => ['Experience &rarr; Lucre', 'Attack Gauge &minus;']
}
