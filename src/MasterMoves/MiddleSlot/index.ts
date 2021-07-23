import { MasterMove, MasterMoveSlot } from 'MasterMoves'
import { DoubleShot } from './DoubleShot'
import { DragonSlayer } from './DragonSlayer'
import { ElvenArcher } from './ElvenArcher'
import { FlameTongue } from './FlameTongue'
import { GameOfDeath } from './GameOfDeath'
import { HandOfMidas } from './HandOfMidas'
import { LunarShot } from './LunarShot'
import { PoisonBlade } from './PoisonBlade'
import { QuickBlade } from './QuickBlade'
import { Sunlight } from './Sunlight'
import { Uppercut } from './Uppercut'
import { Vampsword } from './Vampsword'

export const MiddleSlotMasterMoves: Readonly<{
  Slot: MasterMoveSlot

  DoubleShot: MasterMove
  DragonSlayer: MasterMove
  ElvenArcher: MasterMove
  FlameTongue: MasterMove
  GameOfDeath: MasterMove
  HandOfMidas: MasterMove
  LunarShot: MasterMove
  PoisonBlade: MasterMove
  QuickBlade: MasterMove
  Sunlight: MasterMove
  Uppercut: MasterMove
  Vampsword: MasterMove

  All: MasterMove[]
}> = {
  Slot: 'middle',

  DoubleShot: DoubleShot,
  DragonSlayer: DragonSlayer,
  ElvenArcher: ElvenArcher,
  FlameTongue: FlameTongue,
  GameOfDeath: GameOfDeath,
  HandOfMidas: HandOfMidas,
  LunarShot: LunarShot,
  PoisonBlade: PoisonBlade,
  QuickBlade: QuickBlade,
  Sunlight: Sunlight,
  Uppercut: Uppercut,
  Vampsword: Vampsword,

  All: [
    DoubleShot,
    DragonSlayer,
    ElvenArcher,
    FlameTongue,
    GameOfDeath,
    HandOfMidas,
    LunarShot,
    PoisonBlade,
    QuickBlade,
    Sunlight,
    Uppercut,
    Vampsword
  ]
}
