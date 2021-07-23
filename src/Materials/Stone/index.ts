import { Material, MaterialCategory } from 'Materials'
import { GaiasTears } from './GaiasTears'
import { Marble } from './Marble'
import { Obsidian } from './Obsidian'
import { PeddaStone } from './PeddaStone'

export const StoneMaterials: Readonly<{
  Category: MaterialCategory

  GaiasTears: Material
  Marble: Material
  Obsidian: Material
  PeddaStone: Material

  All: Material[]
}> = {
  Category: 'Stone',

  GaiasTears: GaiasTears,
  Marble: Marble,
  Obsidian: Obsidian,
  PeddaStone: PeddaStone,

  All: [GaiasTears, Marble, Obsidian, PeddaStone]
}
