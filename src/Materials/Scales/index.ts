import { Material, MaterialCategory } from 'Materials'
import { DragonScales } from './DragonScales'
import { FishScales } from './FishScales'
import { LizardScales } from './LizardScales'
import { SnakeScales } from './SnakeScales'

export const ScalesMaterials: Readonly<{
  Category: MaterialCategory

  DragonScales: Material
  FishScales: Material
  LizardScales: Material
  SnakeScales: Material

  All: Material[]
}> = {
  Category: 'Scales',

  DragonScales: DragonScales,
  FishScales: FishScales,
  LizardScales: LizardScales,
  SnakeScales: SnakeScales,

  All: [DragonScales, FishScales, LizardScales, SnakeScales]
}
