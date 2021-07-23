import { ActiveCard, Card, CardCategory } from 'Cards'
import { BlacksmithGod } from './BlacksmithGod'
import { FertilityGoddess } from './FertilityGoddess'
import { GodOfWar } from './GodOfWar'
import { LoveGoddess } from './LoveGoddess'
import { MoonGoddess } from './MoonGoddess'
import { MotherOfGods } from './MotherOfGods'
import { OceanGod } from './OceanGod'
import { RulerOfTheSky } from './RulerOfTheSky'
import { SunGod } from './SunGod'
import { ThunderGod } from './ThunderGod'
import { WindGod } from './WindGod'
import { WisdomGoddess } from './WisdomGoddess'

export const HeavenGodCards: Readonly<{
  Category: CardCategory

  BlacksmithGod: ActiveCard
  FertilityGoddess: ActiveCard
  GodOfWar: ActiveCard
  LoveGoddess: ActiveCard
  MoonGoddess: ActiveCard
  MotherOfGods: ActiveCard
  OceanGod: ActiveCard
  RulerOfTheSky: ActiveCard
  SunGod: ActiveCard
  ThunderGod: ActiveCard
  WindGod: ActiveCard
  WisdomGoddess: ActiveCard

  All: Card[]
}> = {
  Category: 'Heaven God',

  BlacksmithGod: BlacksmithGod,
  FertilityGoddess: FertilityGoddess,
  GodOfWar: GodOfWar,
  LoveGoddess: LoveGoddess,
  MoonGoddess: MoonGoddess,
  MotherOfGods: MotherOfGods,
  OceanGod: OceanGod,
  RulerOfTheSky: RulerOfTheSky,
  SunGod: SunGod,
  ThunderGod: ThunderGod,
  WindGod: WindGod,
  WisdomGoddess: WisdomGoddess,

  All: [
    BlacksmithGod,
    FertilityGoddess,
    GodOfWar,
    LoveGoddess,
    MoonGoddess,
    MotherOfGods,
    OceanGod,
    RulerOfTheSky,
    SunGod,
    ThunderGod,
    WindGod,
    WisdomGoddess
  ]
}
