import { CardContext, Cards } from 'Cards'
import { EquipmentContext, WeaponContext } from 'Forge/Gear'
import { MaterialContext } from 'Materials'
import { Taint } from './Taint'

const _powerOfTwo: { [exponent in Level]: number } = {
  0: 1,
  1: 2,
  2: 4,
  3: 8,
  4: 16,
  5: 32,
  6: 64,
  7: 128,
  8: 256,
  9: 512,
  10: 1024,
  11: 2048,
  12: 4096,
  13: 8192,
  14: 16384,
  15: 32768
}

function _consumeRemainingEnergy(context: EssencesContext) {
  Array.of(Essences.Dryad, Essences.Aura, Essences.Salamander, Essences.Gnome, Essences.Jinn, Essences.Undine).forEach(
    (essence) => {
      while (context.potential[essence] > 0) {
        context.potential[essence]--
        _increase(context, essence)
      }
    }
  )
}

function _decrease(context: EssencesContext, essence: Essence) {
  if (context.levels[essence] === 0) {
    return
  }

  const decrease = () => {
    const resistance = context.resistances[essence]

    context.levels[essence]--
    context.energy += resistance * _powerOfTwo[context.levels[essence]]
  }

  switch (essence) {
    case Essences.Wisp:
    case Essences.Shade:
      decrease()
      return
    default:
      if (context.energy >= 4) {
        decrease()
      }
      return
  }
}

function _increase(context: EssencesContext, essence: Essence) {
  const level = context.levels[essence]

  if (level === 15) {
    return
  }

  const requiredEnergy = context.resistances[essence] * _powerOfTwo[level]

  if (context.energy >= requiredEnergy) {
    context.energy -= requiredEnergy
    context.levels[essence]++
  }
}

function _resetResistances(context: EssencesContext & MaterialContext): void {
  context.resistances = { ...context.material.resistances }
}

function _resistance50Percent(context: EssencesContext, essence: Essence): void {
  let resistance = context.resistances[essence]

  resistance = Math.trunc(resistance / 2)

  context.resistances[essence] = Math.min(resistance, 1)
}

function _resistance75Percent(context: EssencesContext, essence: Essence): void {
  let resistance = context.resistances[essence]

  resistance = Math.trunc(resistance / 4) * 3

  context.resistances[essence] = Math.min(resistance, 1)
}

function _taint(context: EssencesContext & CardContext, essence: Essence) {
  switch (context.worldPower) {
    case Cards.World.AncientMoon:
      Taint.ancientMoon(context, essence)
      break
    case Cards.World.MirroredWorld:
      Taint.mirroredWorld(context, essence)
      break
    default:
      Taint.normal(context, essence)
      break
  }
}

function _total(context: EssencesContext): number {
  return Object.values(context.levels)
    .map((level) => level as number)
    .reduce((sum, level) => sum + level, 0)
}

function _getWeaponMarkers(context: EssencesContext & WeaponContext): Markers {
  const { shade, wisp, dryad, aura, salamander, gnome, jinn, undine } = context.levels
  const { markerThreshold } = context.gear

  return {
    wisp: wisp >= markerThreshold,
    shade: shade >= markerThreshold,
    dryad: dryad >= markerThreshold,
    aura: aura >= markerThreshold,
    salamander: salamander >= markerThreshold,
    gnome: gnome >= markerThreshold,
    jinn: jinn >= markerThreshold,
    undine: undine >= markerThreshold
  }
}

function _getEquipmentMarkers(project: EssencesContext & EquipmentContext): Markers {
  const { shade, wisp, dryad, aura, salamander, gnome, jinn, undine } = project.levels
  const { markerThreshold } = project.gear

  return {
    wisp: shade >= markerThreshold,
    shade: wisp >= markerThreshold,
    dryad: aura >= markerThreshold,
    aura: dryad >= markerThreshold,
    salamander: undine >= markerThreshold,
    gnome: salamander >= markerThreshold,
    jinn: gnome >= markerThreshold,
    undine: jinn >= markerThreshold
  }
}

export type Potential = 'dryad' | 'aura' | 'salamander' | 'gnome' | 'jinn' | 'undine'
export type Essence = 'wisp' | 'shade' | Potential
export type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
export type Resistances = { [essence in Essence]: number }
export type Markers = { [essence in Essence]: boolean }

export type EssencesContext = {
  energy: number
  levels: { [essence in Essence]: Level }
  potential: { [essence in Potential]: number }
  resistances: Resistances
}

export namespace Essences {
  export const Wisp: Essence = 'wisp'
  export const Shade: Essence = 'shade'
  export const Dryad: Essence & Potential = 'dryad'
  export const Aura: Essence & Potential = 'aura'
  export const Salamander: Essence & Potential = 'salamander'
  export const Gnome: Essence & Potential = 'gnome'
  export const Jinn: Essence & Potential = 'jinn'
  export const Undine: Essence & Potential = 'undine'

  export const consumeRemainingEnergy: (context: EssencesContext) => void = _consumeRemainingEnergy
  export const decrease: (context: EssencesContext, essence: Essence) => void = _decrease
  export const increase: (context: EssencesContext, essence: Essence) => void = _increase
  export const resistance50Percent: (context: EssencesContext, essence: Essence) => void = _resistance50Percent
  export const resistance75Percent: (context: EssencesContext, essence: Essence) => void = _resistance75Percent
  export const taint: (context: EssencesContext & CardContext, essence: Essence) => void = _taint
  export const total: (context: EssencesContext) => number = _total

  export const resetResistances: (context: EssencesContext & MaterialContext) => void = _resetResistances
  export const getWeaponMarkers: (context: EssencesContext & WeaponContext) => Markers = _getWeaponMarkers
  export const getEquipmentMarkers: (context: EssencesContext & EquipmentContext) => Markers = _getEquipmentMarkers
}
