import { Entity } from 'Common'
import { EquipmentAttributes } from 'Forge/Gear'
import { AlteredArmor } from 'Forge/Projects'
import { Special } from 'Specials'
import { Armor as _Armor } from './Armor'
import { Boots as _Boots } from './Boots'
import { Gauntlet as _Gauntlet } from './Gauntlet'
import { Hat as _Hat } from './Hat'
import { Hauberk as _Hauberk } from './Hauberk'
import { Helm as _Helm } from './Helm'
import { Mantle as _Mantle } from './Mantle'
import { Pendant as _Pendant } from './Pendant'
import { Ring as _Ring } from './Ring'
import { Robe as _Robe } from './Robe'
import { Shield as _Shield } from './Shield'
import { Shoes as _Shoes } from './Shoes'

export type Equipment = Entity & {
  readonly attributes: EquipmentAttributes
  readonly markerThreshold: number
  readonly priceCoefficient: number
  readonly compatibleSpecials: Special[]
  readonly activate?: (project: AlteredArmor) => void
}

export type ActiveEquipment = Equipment & {
  readonly activate: (project: AlteredArmor) => void
}

export namespace Equipments {
  export const Shield = _Shield
  export const Helm = _Helm
  export const Hat = _Hat
  export const Hauberk = _Hauberk
  export const Robe = _Robe
  export const Gauntlet = _Gauntlet
  export const Ring = _Ring
  export const Boots = _Boots
  export const Shoes = _Shoes
  export const Armor = _Armor
  export const Mantle = _Mantle
  export const Pendant = _Pendant

  export const All: Equipment[] = [
    Shield,
    Helm,
    Hat,
    Hauberk,
    Robe,
    Gauntlet,
    Ring,
    Boots,
    Shoes,
    Armor,
    Mantle,
    Pendant
  ]
}
