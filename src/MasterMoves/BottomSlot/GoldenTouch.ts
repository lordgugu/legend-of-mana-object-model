import { MasterMove, MasterMoves } from 'MasterMoves'

export const GoldenTouch: MasterMove = {
  id: 'GoldenTouch',
  name: 'Golden Touch',
  slot: MasterMoves.Bottom.Slot,
  effects: () => ['Experience &rarr; Lucre', 'Attack Gauge &minus;']
}
