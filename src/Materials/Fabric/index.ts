import { Material, MaterialCategory } from 'Materials'
import { AltenaFelt } from './AltenaFelt'
import { JaddHemp } from './JaddHemp'
import { SirhtansSilk } from './SirhtansSilk'
import { ToppleCotton } from './ToppleCotton'

export const FabricMaterials: Readonly<{
  Category: MaterialCategory

  AltenaFelt: Material
  JaddHemp: Material
  SirhtansSilk: Material
  ToppleCotton: Material

  All: Material[]
}> = {
  Category: 'Fabric',

  AltenaFelt: AltenaFelt,
  JaddHemp: JaddHemp,
  SirhtansSilk: SirhtansSilk,
  ToppleCotton: ToppleCotton,

  All: [AltenaFelt, JaddHemp, SirhtansSilk, ToppleCotton]
}
