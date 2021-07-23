import { Material, MaterialCategory } from 'Materials'
import { AnimalBone } from './AnimalBone'
import { CursedBone } from './CursedBone'
import { Fossil } from './Fossil'
import { Ivory } from './Ivory'

export const BoneMaterials: Readonly<{
  Category: MaterialCategory

  AnimalBone: Material
  CursedBone: Material
  Fossil: Material
  Ivory: Material

  All: Material[]
}> = {
  Category: 'Bone',

  AnimalBone: AnimalBone,
  CursedBone: CursedBone,
  Fossil: Fossil,
  Ivory: Ivory,

  All: [AnimalBone, CursedBone, Fossil, Ivory]
}
