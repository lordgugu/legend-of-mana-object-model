import { MasterMove, MasterMoveSlot } from 'MasterMoves'
import { Demonicide } from './Demonicide'
import { Electrosceptre } from './Electrosceptre'
import { GoldenTouch } from './GoldenTouch'
import { Jump } from './Jump'
import { MagmaHammer } from './MagmaHammer'
import { Mjolnir } from './Mjolnir'
import { Moonlight } from './Moonlight'
import { QuakeHammer } from './QuakeHammer'
import { Ragnarok } from './Ragnarok'
import { RedDream } from './RedDream'
import { SinisterBlade } from './SinisterBlade'
import { SledgeHammer } from './SledgeHammer'
import { Treefeller } from './Treefeller'
import { Woodchopper } from './Woodchopper'

export const BottomSlotMasterMoves: Readonly<{
  Slot: MasterMoveSlot

  Demonicide: MasterMove
  Electrosceptre: MasterMove
  GoldenTouch: MasterMove
  Jump: MasterMove
  MagmaHammer: MasterMove
  Mjolnir: MasterMove
  Moonlight: MasterMove
  QuakeHammer: MasterMove
  Ragnarok: MasterMove
  RedDream: MasterMove
  SinisterBlade: MasterMove
  SledgeHammer: MasterMove
  Treefeller: MasterMove
  Woodchopper: MasterMove

  All: MasterMove[]
}> = {
  Slot: 'bottom',

  Demonicide: Demonicide,
  Electrosceptre: Electrosceptre,
  GoldenTouch: GoldenTouch,
  Jump: Jump,
  MagmaHammer: MagmaHammer,
  Mjolnir: Mjolnir,
  Moonlight: Moonlight,
  QuakeHammer: QuakeHammer,
  Ragnarok: Ragnarok,
  RedDream: RedDream,
  SinisterBlade: SinisterBlade,
  SledgeHammer: SledgeHammer,
  Treefeller: Treefeller,
  Woodchopper: Woodchopper,

  All: [
    Demonicide,
    Electrosceptre,
    GoldenTouch,
    Jump,
    MagmaHammer,
    Mjolnir,
    Moonlight,
    QuakeHammer,
    Ragnarok,
    RedDream,
    SinisterBlade,
    SledgeHammer,
    Treefeller,
    Woodchopper
  ]
}
