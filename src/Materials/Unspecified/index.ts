import { Material, MaterialCategory } from 'Materials'
import { Adamantite } from './Adamantite'
import { Coral } from './Coral'
import { Emerald } from './Emerald'
import { Fullmetal } from './Fullmetal'
import { LapisLazuli } from './LapisLazuli'
import { Pearl } from './Pearl'
import { Shell } from './Shell'
import { TortoiseShell } from './TortoiseShell'

export const UnspecifiedMaterials: Readonly<{
  Category: MaterialCategory

  Adamantite: Material
  Coral: Material
  Emerald: Material
  Fullmetal: Material
  LapisLazuli: Material
  Pearl: Material
  Shell: Material
  TortoiseShell: Material

  All: Material[]
}> = {
  Category: undefined,

  Adamantite: Adamantite,
  Coral: Coral,
  Emerald: Emerald,
  Fullmetal: Fullmetal,
  LapisLazuli: LapisLazuli,
  Pearl: Pearl,
  Shell: Shell,
  TortoiseShell: TortoiseShell,

  All: [Adamantite, Coral, Emerald, Fullmetal, LapisLazuli, Pearl, Shell, TortoiseShell]
}
