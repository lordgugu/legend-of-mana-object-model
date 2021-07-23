import { Entity } from 'Common'
import { Resistances } from 'Forge/Essences'
import { EquipmentAttributes, WeaponAttributes } from 'Forge/Gear'
import { Project } from 'Forge/Projects'
import { AeroliteMaterials } from './Aerolite'
import { BoneMaterials } from './Bone'
import { FabricMaterials } from './Fabric'
import { HideMaterials } from './Hide'
import { MetalMaterials } from './Metal'
import { ScalesMaterials } from './Scales'
import { StoneMaterials } from './Stone'
import { UnspecifiedMaterials } from './Unspecified'
import { WoodMaterials } from './Wood'

export type MaterialCategory =
  | 'Metal'
  | 'Wood'
  | 'Stone'
  | 'Hide'
  | 'Scales'
  | 'Bone'
  | 'Fabric'
  | 'Aerolite'
  | undefined

export type Material = Entity & {
  readonly category: MaterialCategory
  readonly growthControl: number
  readonly weaponAttributes: WeaponAttributes
  readonly equipmentAttributes: EquipmentAttributes
  readonly resistances: Resistances
  readonly priceCoefficient: number
  readonly activate?: (project: Project) => void
}

export type ActiveMaterial = Material & {
  readonly activate: (project: Project) => void
}

export type MaterialContext = {
  material: Material
}

export namespace Materials {
  export const Aerolite = AeroliteMaterials
  export const Bone = BoneMaterials
  export const Fabric = FabricMaterials
  export const Hide = HideMaterials
  export const Metal = MetalMaterials
  export const Scales = ScalesMaterials
  export const Stone = StoneMaterials
  export const Wood = WoodMaterials
  export const Unspecified = UnspecifiedMaterials

  export const All = [
    ...Aerolite.All,
    ...Bone.All,
    ...Fabric.All,
    ...Hide.All,
    ...Metal.All,
    ...Scales.All,
    ...Stone.All,
    ...Wood.All,
    ...Unspecified.All
  ]
}
