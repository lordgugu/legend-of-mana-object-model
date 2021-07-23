import { Entity } from 'Common'
import { AutoRevive as _AutoRevive } from './AutoRevive'
import { ExtraExperience as _ExtraExperience } from './ExtraExperience'
import { ExtraLucre as _ExtraLucre } from './ExtraLucre'
import { FastRevive as _FastRevive } from './FastRevive'
import { MoveHpRegeneration as _MoveHpRegeneration } from './MoveHpRegeneration'
import { NoHpRegeneration as _NoHpRegeneration } from './NoHpRegeneration'
import { NoReviveMoveHpRegeneration as _NoReviveMoveHpRegeneration } from './NoReviveMoveHpRegeneration'
import { ShareExperience as _ShareExperience } from './ShareExperience'
import { StareImmunity as _StareImmunity } from './StareImmunity'

export type Special = Entity & {
  readonly effect: string[]
  readonly notes?: string[]
}

export namespace Specials {
  export const AutoRevive: Special = _AutoRevive
  export const ExtraExperience: Special = _ExtraExperience
  export const ExtraLucre: Special = _ExtraLucre
  export const FastRevive: Special = _FastRevive
  export const MoveHpRegeneration: Special = _MoveHpRegeneration
  export const NoHpRegeneration: Special = _NoHpRegeneration
  export const NoReviveMoveHpRegeneration: Special = _NoReviveMoveHpRegeneration
  export const ShareExperience: Special = _ShareExperience
  export const StareImmunity: Special = _StareImmunity
}
