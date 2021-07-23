import { Entity } from 'Common'
import { BottomSlotMasterMoves } from './BottomSlot'
import { MiddleSlotMasterMoves } from './MiddleSlot'
import { TopSlotMasterMoves } from './TopSlot'

export type MasterMoveSlot = 'top' | 'middle' | 'bottom'

export type MasterMove = Entity & {
  readonly slot: MasterMoveSlot
  readonly effects: () => string[]
  readonly notes?: () => string[]
}

export type MasterMovesContext = {
  masterMoves: { [slot in MasterMoveSlot]: MasterMove }
}

export namespace MasterMoves {
  export const Top = TopSlotMasterMoves
  export const Middle = MiddleSlotMasterMoves
  export const Bottom = BottomSlotMasterMoves
  export const All = [...Top.All, ...Middle.All, ...Bottom.All]
}
