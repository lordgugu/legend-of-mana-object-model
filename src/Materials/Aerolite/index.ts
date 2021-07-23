import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveMaterial, Material, MaterialCategory } from 'Materials'
import { AnkhRock } from './AnkhRock'
import { BiellaRock } from './BiellaRock'
import { HalleyRock } from './HalleyRock'
import { JacobiniRock } from './JacobiniRock'
import { NemesisRock } from './NemesisRock'
import { SwifteRock } from './SwifteRock'
import { TuttleRock } from './TuttleRock'
import { VinekRock } from './VinekRock'

function _activate(project: Project): void {
  Essences.decrease(project, Essences.Salamander)
}

export const AeroliteMaterials: Readonly<{
  Category: MaterialCategory

  AnkhRock: ActiveMaterial
  BiellaRock: ActiveMaterial
  HalleyRock: ActiveMaterial
  JacobiniRock: ActiveMaterial
  NemesisRock: ActiveMaterial
  SwifteRock: ActiveMaterial
  TuttleRock: ActiveMaterial
  VinekRock: ActiveMaterial

  All: Material[]

  activate: (project: Project) => void
}> = {
  Category: 'Aerolite',

  AnkhRock: AnkhRock,
  BiellaRock: BiellaRock,
  HalleyRock: HalleyRock,
  JacobiniRock: JacobiniRock,
  NemesisRock: NemesisRock,
  SwifteRock: SwifteRock,
  TuttleRock: TuttleRock,
  VinekRock: VinekRock,

  All: [AnkhRock, BiellaRock, HalleyRock, JacobiniRock, NemesisRock, SwifteRock, TuttleRock, VinekRock],

  activate: _activate
}
