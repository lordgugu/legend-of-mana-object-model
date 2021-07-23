import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const VampireFang: ActiveItem = {
  id: 'VampireFang',
  name: 'Vampire Fang',
  category: Items.FangClaw.Category,
  energy: 24,
  activate: (project: Project) => {
    const { energy } = project
    const jinn = project.levels[Essences.Jinn]
    const undine = project.levels[Essences.Undine]

    Stats.widenRange(project, Stats.Charm, -3, 5)
    Stats.widenRange(project, Stats.Spirit, -3, 5)

    Stats.increment(project, Stats.Charm)
    Stats.increment(project, Stats.Spirit)

    if (jinn === 0 && undine >= 5 && energy >= 8) {
      project.cards.pending = Cards.EvilGod.LunarWitch
    }
  }
}
