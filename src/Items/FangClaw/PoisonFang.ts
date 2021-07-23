import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const PoisonFang: ActiveItem = {
  id: 'PoisonFang',
  name: 'Poison Fang',
  category: Items.FangClaw.Category,
  energy: 8,
  activate: (project: Project) => {
    const { energy } = project
    const dryad = project.levels[Essences.Dryad]
    const aura = project.levels[Essences.Aura]

    if (project.type === Projects.Weapon) {
      Gear.weapon050Percent(project, Gear.Force)
      Gear.weapon150Percent(project, Gear.Tech)
    }

    if (aura === 0 && dryad >= 5 && energy >= 8) {
      project.cards.pending = Cards.EvilGod.BeastHeadedGod
    }
  }
}
