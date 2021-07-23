import { Material, MaterialCategory } from 'Materials'
import { AnimalHide } from './AnimalHide'
import { CentaurHide } from './CentaurHide'
import { DragonSkin } from './DragonSkin'
import { GatorSkin } from './GatorSkin'

export const HideMaterials: Readonly<{
  Category: MaterialCategory

  AnimalHide: Material
  CentaurHide: Material
  DragonSkin: Material
  GatorSkin: Material

  All: Material[]
}> = {
  Category: 'Hide',

  AnimalHide: AnimalHide,
  CentaurHide: CentaurHide,
  DragonSkin: DragonSkin,
  GatorSkin: GatorSkin,

  All: [AnimalHide, CentaurHide, DragonSkin, GatorSkin]
}
