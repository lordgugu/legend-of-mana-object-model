import { Entity } from 'Common'
import { WeaponAttributes } from 'Forge/Gear'
import { TemperedWeapon } from 'Forge/Projects'
import { MasterMove, MasterMovesContext, MasterMoveSlot } from 'MasterMoves'
import { Axe as _Axe } from './Axe'
import { Bow as _Bow } from './Bow'
import { Flail as _Flail } from './Flail'
import { Glove as _Glove } from './Glove'
import { Hammer as _Hammer } from './Hammer'
import { Knife as _Knife } from './Knife'
import { Spear as _Spear } from './Spear'
import { Staff as _Staff } from './Staff'
import { Sword as _Sword } from './Sword'
import { TwoHandedAxe as _TwoHandedAxe } from './TwoHandedAxe'
import { TwoHandedSword as _TwoHandedSword } from './TwoHandedSword'

export type Weapon = Entity &
  MasterMovesContext & {
    readonly attributes: WeaponAttributes
    readonly markerThreshold: number
    readonly priceCoefficient: number
    readonly compatibleMasterMoves: { readonly [slot in MasterMoveSlot]?: MasterMove[] }
    readonly activate?: (project: TemperedWeapon) => void
  }

export type ActiveWeapon = Weapon & {
  readonly activate: (project: TemperedWeapon) => void
}

export namespace Weapons {
  export const Knife = _Knife
  export const Sword = _Sword
  export const Axe = _Axe
  export const TwoHandedSword = _TwoHandedSword
  export const TwoHandedAxe = _TwoHandedAxe
  export const Hammer = _Hammer
  export const Spear = _Spear
  export const Staff = _Staff
  export const Glove = _Glove
  export const Flail = _Flail
  export const Bow = _Bow

  export const All: Weapon[] = [
    Knife,
    Sword,
    Axe,
    TwoHandedSword,
    TwoHandedAxe,
    Hammer,
    Spear,
    Staff,
    Glove,
    Flail,
    Bow
  ]
}
