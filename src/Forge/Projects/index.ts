import { CardContext, Cards, CardSlot } from 'Cards'
import { Equipment, Equipments } from 'Equipments'
import { Essences, EssencesContext } from 'Forge/Essences'
import { EquipmentAttributes, EquipmentContext, Gear, WeaponAttributes, WeaponContext } from 'Forge/Gear'
import { ImmunitiesContext } from 'Forge/Immunities'
import { Stats, StatsContext } from 'Forge/Stats'
import { Item, Items } from 'Items'
import { MasterMovesContext } from 'MasterMoves'
import { Material, MaterialContext, Materials } from 'Materials'
import { Weapon, Weapons } from 'Weapons'

export type TemperedWeapon = StatsContext &
  EssencesContext &
  CardContext &
  MaterialContext &
  WeaponContext &
  MasterMovesContext & {
    type: 'Weapon'
  }

export type AlteredArmor = StatsContext &
  EssencesContext &
  CardContext &
  MaterialContext &
  EquipmentContext &
  ImmunitiesContext & {
    type: 'Equipment'
  }

export type Project = TemperedWeapon | AlteredArmor

export type OffensivePower = WeaponAttributes & {
  power: number
}

export type DefensivePower = EquipmentAttributes

export type ItemStep = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13

function _activateMaterial(project: Project) {
  const { material } = project

  if (material.activate) {
    material.activate(project)
  }
}

function _activateItem(project: Project, item: Item) {
  if (item.activate) {
    item.activate(project)
  }
}

function _activateCard(slot: CardSlot): (project: Project) => void {
  return (project: Project) => {
    const card = project.cards[slot]

    if (card && card.activate) {
      card.activate(project, slot)
    }
  }
}

const StepCode: { [id in ItemStep]: (project: Project, item: Item) => void } = {
  0: (project) => {
    Stats.resetLimits(project)
    Cards.resetVolatileCards(project)

    switch (project.type) {
      case Projects.Weapon:
        Gear.resetWeaponAttributes(project)
        break
      case Projects.Equipment:
        Gear.resetEquipmentAttributes(project)
        break
    }

    Essences.resetResistances(project)
  },
  1: (project) => {
    if (!project.gear.activate) {
      return
    }

    switch (project.type) {
      case Projects.Weapon:
        project.gear.activate(project)
        break
      case Projects.Equipment:
        project.gear.activate(project)
        break
    }
  },
  2: Cards.resolveWorldPower,
  3: (project, item) => (project.energy = item.energy),
  4: _activateMaterial,
  5: _activateItem,
  6: Cards.pushCards,
  7: _activateCard(Cards.Leaving),
  8: _activateCard(Cards.Bottom),
  9: _activateCard(Cards.Middle),
  10: _activateCard(Cards.Top),
  11: _activateCard(Cards.Hidden),
  12: Essences.consumeRemainingEnergy,
  13: Stats.resolveFinalStats
}

function _runItemSteps(project: Project, item: Item, startStep: ItemStep, finishStep: ItemStep): void {
  for (let currentStep = startStep; currentStep <= finishStep; ++currentStep) {
    StepCode[currentStep](project, item)
  }
}

function _addItem(project: Project, item: Item): void {
  _runItemSteps(project, item, Projects.StartStep, Projects.FinishStep)
}

function _calculateOffensivePower(project: TemperedWeapon): OffensivePower {
  const { growthControl } = project.material
  const projectAttributes = project.attributes
  const weaponAttributes = project.gear.attributes
  const total = Essences.total(project)

  const growthFactor = 1 + total / growthControl

  const sharp = (growthFactor * projectAttributes[Gear.Sharp] * weaponAttributes[Gear.Sharp]) / 128
  const heavy = (growthFactor * projectAttributes[Gear.Heavy] * weaponAttributes[Gear.Heavy]) / 128
  const force = (growthFactor * projectAttributes[Gear.Force] * weaponAttributes[Gear.Force]) / 128
  const tech = (growthFactor * projectAttributes[Gear.Tech] * weaponAttributes[Gear.Tech]) / 128

  return {
    power: Math.trunc(sharp + heavy + force + tech),
    sharp: Math.trunc(sharp),
    heavy: Math.trunc(heavy),
    force: Math.trunc(force),
    tech: Math.trunc(tech)
  }
}

function _calculateDefensivePower(project: AlteredArmor): DefensivePower {
  const projectAttributes = project.attributes
  const equipmentAttributes = project.gear.attributes

  const slash = (projectAttributes[Gear.Slash] * equipmentAttributes[Gear.Slash]) / 64
  const strike = (projectAttributes[Gear.Strike] * equipmentAttributes[Gear.Strike]) / 64
  const pierce = (projectAttributes[Gear.Pierce] * equipmentAttributes[Gear.Pierce]) / 64
  const magic = (projectAttributes[Gear.Magic] * equipmentAttributes[Gear.Magic]) / 64

  return {
    slash: Math.trunc(slash),
    strike: Math.trunc(strike),
    pierce: Math.trunc(pierce),
    magic: Math.trunc(magic)
  }
}

function _calculatePrice(project: Project): number {
  const materialCoefficient = project.material.priceCoefficient
  const equipmentCoefficient = project.gear.priceCoefficient
  const { hidden, top, middle, bottom } = project.cards

  return (
    (materialCoefficient * equipmentCoefficient) / 150 +
    (hidden?.price || 0) +
    (bottom?.price || 0) +
    (middle?.price || 0) +
    (top?.price || 0)
  )
}

export namespace Projects {
  export const addItem: (project: Project, item: Item) => void = _addItem
  export const runItemSteps: (project: Project, item: Item, startStep: ItemStep, finishStep: ItemStep) => void =
    _runItemSteps

  export const calculateOffensivePower: (project: TemperedWeapon) => OffensivePower = _calculateOffensivePower
  export const calculateDefensivePower: (project: AlteredArmor) => DefensivePower = _calculateDefensivePower
  export const calculatePrice: (project: Project) => number = _calculatePrice

  export const StartStep: ItemStep = 0
  export const ActivateGearStep: ItemStep = 1
  export const ResolveWorldPowerStep: ItemStep = 2
  export const ProvideItemEnergyStep: ItemStep = 3
  export const ActivateMaterialStep: ItemStep = 4
  export const ActivateItemStep: ItemStep = 5
  export const PushCardsStep: ItemStep = 6
  export const ActivateLeavingCardStep: ItemStep = 7
  export const ActivateBottomCardStep: ItemStep = 8
  export const ActivateMiddleCardStep: ItemStep = 9
  export const ActivateTopCardStep: ItemStep = 10
  export const ActivateHiddenCardStep: ItemStep = 11
  export const ConsumeRemainingEnergyStep: ItemStep = 12
  export const FinishStep: ItemStep = 13

  export const ItemStepsById: { [id in ItemStep]: ItemStep } = {
    0: StartStep,
    1: ActivateGearStep,
    2: ResolveWorldPowerStep,
    3: ProvideItemEnergyStep,
    4: ActivateMaterialStep,
    5: ActivateItemStep,
    6: PushCardsStep,
    7: ActivateLeavingCardStep,
    8: ActivateBottomCardStep,
    9: ActivateMiddleCardStep,
    10: ActivateTopCardStep,
    11: ActivateHiddenCardStep,
    12: ConsumeRemainingEnergyStep,
    13: FinishStep
  }

  export const Weapon = 'Weapon'
  export const Equipment = 'Equipment'

  export const WeaponsByForgeCode: { [code in string]: Weapon } = {
    '1': Weapons.Knife,
    '2': Weapons.Sword,
    '3': Weapons.Axe,
    '4': Weapons.TwoHandedSword,
    '5': Weapons.TwoHandedAxe,
    '6': Weapons.Hammer,
    '7': Weapons.Spear,
    '8': Weapons.Staff,
    '9': Weapons.Glove,
    '10': Weapons.Flail,
    '11': Weapons.Bow
  }

  export const EquipmentsByForgeCode: { [code in string]: Equipment } = {
    '12': Equipments.Shield,
    '13': Equipments.Helm,
    '14': Equipments.Hat,
    '15': Equipments.Hauberk,
    '16': Equipments.Robe,
    '17': Equipments.Gauntlet,
    '18': Equipments.Ring,
    '19': Equipments.Boots,
    '20': Equipments.Shoes,
    '21': Equipments.Armor,
    '22': Equipments.Mantle,
    '23': Equipments.Pendant
  }

  export const MaterialsByForgeCode: { [code in string]: Material } = {
    '1': Materials.Metal.MenosBronze,
    '2': Materials.Metal.ValsenaIron,
    '3': Materials.Metal.GranzSteel,
    '4': Materials.Metal.LaurentSilver,
    '5': Materials.Metal.WendelSilver,
    '6': Materials.Metal.BeiserGold,
    '7': Materials.Metal.IshePlatinum,
    '8': Materials.Metal.LorimarIron,
    '9': Materials.Metal.AltenaAlloy,
    '10': Materials.Metal.MaiaLead,
    '11': Materials.Metal.Orihalcon,
    '12': Materials.Wood.OakWood,
    '13': Materials.Wood.HollyWood,
    '14': Materials.Wood.BaobabWood,
    '15': Materials.Wood.EbonyWood,
    '16': Materials.Wood.MapleWood,
    '17': Materials.Wood.DiorWood,
    '18': Materials.Wood.AshWood,
    '19': Materials.Wood.FossilWood,
    '20': Materials.Stone.Marble,
    '21': Materials.Stone.Obsidian,
    '22': Materials.Stone.PeddaStone,
    '23': Materials.Stone.GaiasTears,
    '24': Materials.Hide.AnimalHide,
    '25': Materials.Hide.GatorSkin,
    '26': Materials.Hide.CentaurHide,
    '27': Materials.Hide.DragonSkin,
    '28': Materials.Scales.FishScales,
    '29': Materials.Scales.LizardScales,
    '30': Materials.Scales.SnakeScales,
    '31': Materials.Scales.DragonScales,
    '32': Materials.Bone.AnimalBone,
    '33': Materials.Bone.Ivory,
    '34': Materials.Bone.CursedBone,
    '35': Materials.Bone.Fossil,
    '36': Materials.Fabric.ToppleCotton,
    '37': Materials.Fabric.SirhtansSilk,
    '38': Materials.Fabric.JaddHemp,
    '39': Materials.Fabric.AltenaFelt,
    '40': Materials.Aerolite.JacobiniRock,
    '41': Materials.Aerolite.HalleyRock,
    '42': Materials.Aerolite.AnkhRock,
    '43': Materials.Aerolite.VinekRock,
    '44': Materials.Aerolite.TuttleRock,
    '45': Materials.Aerolite.NemesisRock,
    '46': Materials.Aerolite.BiellaRock,
    '47': Materials.Aerolite.SwifteRock,
    '48': Materials.Unspecified.Adamantite,
    '49': Materials.Unspecified.Fullmetal,
    '50': Materials.Unspecified.Coral,
    '51': Materials.Unspecified.TortoiseShell,
    '52': Materials.Unspecified.Shell,
    '53': Materials.Unspecified.Emerald,
    '54': Materials.Unspecified.Pearl,
    '55': Materials.Unspecified.LapisLazuli
  }

  export const ItemsByForgeCode: { [code in string]: Item } = {
    '1': Items.Coins.WispGold,
    '2': Items.Coins.ShadeGold,
    '3': Items.Coins.DryadGold,
    '4': Items.Coins.AuraGold,
    '5': Items.Coins.SalamanderGold,
    '6': Items.Coins.GnomeGold,
    '7': Items.Coins.JinnGold,
    '8': Items.Coins.UndineGold,
    '9': Items.Coins.WispSilver,
    '10': Items.Coins.ShadeSilver,
    '11': Items.Coins.DryadSilver,
    '12': Items.Coins.AuraSilver,
    '13': Items.Coins.SalamanderSilver,
    '14': Items.Coins.GnomeSilver,
    '15': Items.Coins.JinnSilver,
    '16': Items.Coins.UndineSilver,
    '17': Items.MagicStones.Firestone,
    '18': Items.MagicStones.Earthstone,
    '19': Items.MagicStones.Windstone,
    '20': Items.MagicStones.Waterstone,
    '21': Items.MagicCrystals.SunCrystal,
    '22': Items.MagicCrystals.MoonCrystal,
    '23': Items.MagicCrystals.GlowCrystal,
    '24': Items.MagicCrystals.ChaosCrystal,
    '25': Items.Seeds.RoundSeed,
    '26': Items.Seeds.OblongSeed,
    '27': Items.Seeds.CrookedSeed,
    '28': Items.Seeds.BigSeed,
    '29': Items.Seeds.SmallSeed,
    '30': Items.Seeds.LongSeed,
    '31': Items.Seeds.FlatSeed,
    '32': Items.Seeds.SpinySeed,
    '33': Items.Produce.Bellgrapes,
    '34': Items.Produce.Diceberry,
    '35': Items.Produce.Mangoelephant,
    '36': Items.Produce.LoquatShoe,
    '37': Items.Produce.PearOHeels,
    '38': Items.Produce.Squalphin,
    '39': Items.Produce.Citrisquid,
    '40': Items.Produce.Springanana,
    '41': Items.Produce.PeachPuppy,
    '42': Items.Produce.Apricat,
    '43': Items.Produce.Applesocks,
    '44': Items.Produce.Whalamato,
    '45': Items.Produce.PineOClock,
    '46': Items.Produce.FishyFruit,
    '47': Items.Produce.Boarmelon,
    '48': Items.Produce.Rhinoloupe,
    '49': Items.Produce.Orcaplant,
    '50': Items.Produce.Garlicrown,
    '51': Items.Produce.HoneyOnion,
    '52': Items.Produce.SweetMoai,
    '53': Items.Produce.SpinyCarrot,
    '54': Items.Produce.Conchurnip,
    '55': Items.Produce.Cornflower,
    '56': Items.Produce.Cabbadillo,
    '57': Items.Produce.Needlettuce,
    '58': Items.Produce.CherryBombs,
    '59': Items.Produce.MaskedPotato,
    '60': Items.Produce.Lilipods,
    '61': Items.Produce.RocketPapaya,
    '62': Items.Produce.OrangeOpus,
    '63': Items.Produce.Bumpkin,
    '64': Items.Produce.HeartMint,
    '65': Items.Produce.SpadeBasil,
    '66': Items.Produce.Dialaurel,
    '67': Items.Produce.GoldClover,
    '68': Items.Produce.MushInABox,
    '69': Items.Produce.Toadstoolshed,
    '70': Items.Meats.AnimalMeat,
    '71': Items.FangClaw.SharpClaw,
    '72': Items.FangClaw.PoisonFang,
    '73': Items.FangClaw.GiantsHorn,
    '74': Items.FangClaw.Scissors,
    '75': Items.FangClaw.HealingClaw,
    '76': Items.FangClaw.ZombieClaw,
    '77': Items.FangClaw.VampireFang,
    '78': Items.Eyes.LittleEye,
    '79': Items.Eyes.SleepyEye,
    '80': Items.Eyes.SillyEye,
    '81': Items.Eyes.DangerousEye,
    '82': Items.Eyes.AngryEye,
    '83': Items.Eyes.BlankEye,
    '84': Items.Eyes.WickedEye,
    '85': Items.Eyes.CreepyEye,
    '86': Items.Feathers.AngelFeather,
    '87': Items.Feathers.RavenFeather,
    '88': Items.Feathers.ClearFeather,
    '89': Items.Feathers.MothWing,
    '90': Items.Feathers.FlamingQuill,
    '91': Items.Feathers.WhiteFeather,
    '92': Items.Bottles.AromaOil,
    '93': Items.Bottles.DragonBlood,
    '94': Items.Bottles.Acid,
    '95': Items.Bottles.HolyWater,
    '96': Items.Bottles.Ether,
    '97': Items.Vials.Mercury,
    '98': Items.Vials.StinkyBreath,
    '99': Items.Vials.GhostsHowl,
    '100': Items.Vials.DragonsBreath,
    '101': Items.Vials.DamselsSigh,
    '102': Items.Urns.Electricity,
    '103': Items.Urns.Moss,
    '104': Items.Urns.EarOfWheat,
    '105': Items.Pellets.BakedRoach,
    '106': Items.Pellets.BlackenedBat,
    '107': Items.Powders.Sulfur,
    '108': Items.Powders.PoisonPowder,
    '109': Items.Powders.SleepyPowder,
    '110': Items.Powders.KnockoutDust,
    '111': Items.Powders.Rust,
    '112': Items.Powders.GraveDirt,
    '113': Items.Powders.Ash,
    '114': Items.Pouch.Hairball,
    '115': Items.Pouch.Needle,
    '116': Items.Pouch.MirrorPiece,
    '117': Items.Pouch.WadOfWool,
    '118': Items.Pouch.MessyScroll,
    '119': Items.Unspecified.GreenballBun,
    '120': Items.Unspecified.TakoBug,
    '121': Items.Meats.BugMeat,
    '122': Items.Meats.LizardMeat,
    '123': Items.Meats.FishMeat,
    '124': Items.Meats.BirdMeat,
    '125': Items.Meats.MorphMeat,
    '126': Items.Meats.DemonMeat,
    '127': Items.Meats.DragonSteak,
    '128': Items.Meats.OddMeat,
    '129': Items.Meats.MagicalMeat,
    '130': Items.Meats.RottenMeat
  }
}
