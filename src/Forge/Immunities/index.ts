function _add(context: ImmunitiesContext, immunity: Immunity) {
  context.immunities[immunity] = true
}

function _reset(context: ImmunitiesContext) {
  Immunities.All.forEach((immunity) => (context.immunities[immunity] = false))
}

function _set(context: ImmunitiesContext, ...immunities: Immunity[]) {
  _reset(context)
  immunities.forEach((immunity) => _add(context, immunity))
}

export type Immunity =
  | 'poison'
  | 'darkness'
  | 'paralysis'
  | 'confusion'
  | 'flameburst'
  | 'sleep'
  | 'petrification'
  | 'freeze'

export type ImmunitiesContext = {
  immunities: { [immunity in Immunity]: boolean }
}

export namespace Immunities {
  export const add: (context: ImmunitiesContext, immunity: Immunity) => void = _add
  export const reset: (context: ImmunitiesContext) => void = _reset
  export const set: (context: ImmunitiesContext, ...immunities: Immunity[]) => void = _set

  export const Poison: Immunity = 'poison'
  export const Darkness: Immunity = 'darkness'
  export const Paralysis: Immunity = 'paralysis'
  export const Confusion: Immunity = 'confusion'
  export const Flameburst: Immunity = 'flameburst'
  export const Sleep: Immunity = 'sleep'
  export const Petrification: Immunity = 'petrification'
  export const Freeze: Immunity = 'freeze'

  export const All: Immunity[] = [Poison, Darkness, Paralysis, Confusion, Flameburst, Sleep, Petrification, Freeze]
}
