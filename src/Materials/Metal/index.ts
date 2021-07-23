import { Material, MaterialCategory } from 'Materials'
import { AltenaAlloy } from './AltenaAlloy'
import { BeiserGold } from './BeiserGold'
import { GranzSteel } from './GranzSteel'
import { IshePlatinum } from './IshePlatinum'
import { LaurentSilver } from './LaurentSilver'
import { LorimarIron } from './LorimarIron'
import { MaiaLead } from './MaiaLead'
import { MenosBronze } from './MenosBronze'
import { Orihalcon } from './Orihalcon'
import { ValsenaIron } from './ValsenaIron'
import { WendelSilver } from './WendelSilver'

export const MetalMaterials: Readonly<{
  Category: MaterialCategory

  AltenaAlloy: Material
  BeiserGold: Material
  GranzSteel: Material
  IshePlatinum: Material
  LaurentSilver: Material
  LorimarIron: Material
  MaiaLead: Material
  MenosBronze: Material
  Orihalcon: Material
  ValsenaIron: Material
  WendelSilver: Material

  All: Material[]
}> = {
  Category: 'Metal',

  AltenaAlloy: AltenaAlloy,
  BeiserGold: BeiserGold,
  GranzSteel: GranzSteel,
  IshePlatinum: IshePlatinum,
  LaurentSilver: LaurentSilver,
  LorimarIron: LorimarIron,
  MaiaLead: MaiaLead,
  MenosBronze: MenosBronze,
  Orihalcon: Orihalcon,
  ValsenaIron: ValsenaIron,
  WendelSilver: WendelSilver,

  All: [
    AltenaAlloy,
    BeiserGold,
    GranzSteel,
    IshePlatinum,
    LaurentSilver,
    LorimarIron,
    MaiaLead,
    MenosBronze,
    Orihalcon,
    ValsenaIron,
    WendelSilver
  ]
}
