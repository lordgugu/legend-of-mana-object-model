import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { ActiveMaterial, Material, MaterialCategory } from 'Materials'
import { AshWood } from './AshWood'
import { BaobabWood } from './BaobabWood'
import { DiorWood } from './DiorWood'
import { EbonyWood } from './EbonyWood'
import { FossilWood } from './FossilWood'
import { HollyWood } from './HollyWood'
import { MapleWood } from './MapleWood'
import { OakWood } from './OakWood'

function _activate(project: Project): void {
  Essences.taint(project, Essences.Dryad)

  if (project.energy >= 8) {
    project.cards.pending = Cards.Element.Dryad
  }
}

export const WoodMaterials: Readonly<{
  Category: MaterialCategory

  AshWood: ActiveMaterial
  BaobabWood: ActiveMaterial
  DiorWood: ActiveMaterial
  EbonyWood: ActiveMaterial
  FossilWood: ActiveMaterial
  HollyWood: ActiveMaterial
  MapleWood: ActiveMaterial
  OakWood: ActiveMaterial

  All: Material[]

  activate: (project: Project) => void
}> = {
  Category: 'Wood',

  AshWood: AshWood,
  BaobabWood: BaobabWood,
  DiorWood: DiorWood,
  EbonyWood: EbonyWood,
  FossilWood: FossilWood,
  HollyWood: HollyWood,
  MapleWood: MapleWood,
  OakWood: OakWood,

  All: [AshWood, BaobabWood, DiorWood, EbonyWood, FossilWood, HollyWood, MapleWood, OakWood],

  activate: _activate
}
