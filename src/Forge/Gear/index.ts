import { Equipment } from 'Equipments'
import { MaterialContext } from 'Materials'
import { Special } from 'Specials'
import { Weapon } from 'Weapons'

function _050Percent(value: number): number {
  return Math.trunc(value / 2)
}

function _075Percent(value: number): number {
  return Math.trunc(value / 4) * 3
}

function _125Percent(value: number): number {
  return Math.min(255, Math.trunc((value * 5) / 4))
}

function _150Percent(value: number): number {
  return Math.min(255, Math.trunc((value * 3) / 2))
}

function _weapon(context: WeaponContext, attribute: WeaponAttribute, func: (value: number) => number): void {
  const value = context.attributes[attribute]
  context.attributes[attribute] = func(value)
}

function _equipment(context: EquipmentContext, attribute: EquipmentAttribute, func: (value: number) => number): void {
  const value = context.attributes[attribute]
  context.attributes[attribute] = func(value)
}

function _resetWeaponAttributes(context: WeaponContext & MaterialContext) {
  context.attributes = { ...context.material.weaponAttributes }
}

function _resetEquipmentAttributes(context: EquipmentContext & MaterialContext) {
  context.attributes = { ...context.material.equipmentAttributes }
}

export type WeaponAttribute = 'sharp' | 'heavy' | 'force' | 'tech'
export type EquipmentAttribute = 'strike' | 'slash' | 'pierce' | 'magic'

export type WeaponAttributes = { [attribute in WeaponAttribute]: number }
export type EquipmentAttributes = { [attribute in EquipmentAttribute]: number }

export type WeaponContext = {
  attributes: WeaponAttributes
  gear: Weapon
}

export type EquipmentContext = {
  attributes: EquipmentAttributes
  gear: Equipment
  special?: Special
}

export namespace Gear {
  export const Sharp: WeaponAttribute = 'sharp'
  export const Heavy: WeaponAttribute = 'heavy'
  export const Force: WeaponAttribute = 'force'
  export const Tech: WeaponAttribute = 'tech'

  export const weapon050Percent = (context: WeaponContext, attribute: WeaponAttribute) =>
    _weapon(context, attribute, _050Percent)
  export const weapon075Percent = (context: WeaponContext, attribute: WeaponAttribute) =>
    _weapon(context, attribute, _075Percent)
  export const weapon125Percent = (context: WeaponContext, attribute: WeaponAttribute) =>
    _weapon(context, attribute, _125Percent)
  export const weapon150Percent = (context: WeaponContext, attribute: WeaponAttribute) =>
    _weapon(context, attribute, _150Percent)

  export const resetWeaponAttributes: (context: WeaponContext & MaterialContext) => void = _resetWeaponAttributes

  export const Strike: EquipmentAttribute = 'strike'
  export const Slash: EquipmentAttribute = 'slash'
  export const Pierce: EquipmentAttribute = 'pierce'
  export const Magic: EquipmentAttribute = 'magic'

  export const equipment050Percent = (context: EquipmentContext, attribute: EquipmentAttribute) =>
    _equipment(context, attribute, _050Percent)
  export const equipment075Percent = (context: EquipmentContext, attribute: EquipmentAttribute) =>
    _equipment(context, attribute, _075Percent)
  export const equipment125Percent = (context: EquipmentContext, attribute: EquipmentAttribute) =>
    _equipment(context, attribute, _125Percent)
  export const equipment150Percent = (context: EquipmentContext, attribute: EquipmentAttribute) =>
    _equipment(context, attribute, _150Percent)

  export const resetEquipmentAttributes: (context: EquipmentContext & MaterialContext) => void =
    _resetEquipmentAttributes
}
