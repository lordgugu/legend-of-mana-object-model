import { MasterMove, MasterMoves } from 'MasterMoves'

export const GameOfDeath: MasterMove = {
  id: 'GameOfDeath',
  name: 'Game of Death',
  slot: MasterMoves.Middle.Slot,
  effects: () => ['Skill Up', 'Attack Gauge +']
}
