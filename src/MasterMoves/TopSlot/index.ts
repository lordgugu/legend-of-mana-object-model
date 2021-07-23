import { MasterMove, MasterMoveSlot } from 'MasterMoves'
import { Caduceus } from './Caduceus'
import { ChaoticAvenger } from './ChaoticAvenger'
import { FlamingArrow } from './FlamingArrow'
import { GreenPrincess } from './GreenPrincess'
import { Gungnir } from './Gungnir'
import { Icicle } from './Icicle'
import { MagicalShot } from './MagicalShot'
import { MedusaArrow } from './MedusaArrow'
import { PhoenixFalling } from './PhoenixFalling'
import { Shot } from './Shot'
import { SolarFlare } from './SolarFlare'
import { SpearOfLight } from './SpearOfLight'
import { Thrust } from './Thrust'
import { Trident } from './Trident'

export const TopSlotMasterMoves: Readonly<{
  Slot: MasterMoveSlot

  Caduceus: MasterMove
  ChaoticAvenger: MasterMove
  FlamingArrow: MasterMove
  GreenPrincess: MasterMove
  Gungnir: MasterMove
  Icicle: MasterMove
  MagicalShot: MasterMove
  MedusaArrow: MasterMove
  PhoenixFalling: MasterMove
  Shot: MasterMove
  SolarFlare: MasterMove
  SpearOfLight: MasterMove
  Thrust: MasterMove
  Trident: MasterMove

  All: MasterMove[]
}> = {
  Slot: 'top',

  Caduceus: Caduceus,
  ChaoticAvenger: ChaoticAvenger,
  FlamingArrow: FlamingArrow,
  GreenPrincess: GreenPrincess,
  Gungnir: Gungnir,
  Icicle: Icicle,
  MagicalShot: MagicalShot,
  MedusaArrow: MedusaArrow,
  PhoenixFalling: PhoenixFalling,
  Shot: Shot,
  SolarFlare: SolarFlare,
  SpearOfLight: SpearOfLight,
  Thrust: Thrust,
  Trident: Trident,

  All: [
    Caduceus,
    ChaoticAvenger,
    FlamingArrow,
    GreenPrincess,
    Gungnir,
    Icicle,
    MagicalShot,
    MedusaArrow,
    PhoenixFalling,
    Shot,
    SolarFlare,
    SpearOfLight,
    Thrust,
    Trident
  ]
}
