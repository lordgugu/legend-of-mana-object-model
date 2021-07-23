import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const ClearFeather: ActiveItem = {
  id: 'ClearFeather',
  name: 'Clear Feather',
  category: Items.Feathers.Category,
  energy: 24,
  activate: (project: Project) => {
    const { energy } = project
    const gnome = project.levels[Essences.Gnome]
    const jinn = project.levels[Essences.Jinn]

    if (project.type === Projects.Weapon) {
      Gear.weapon050Percent(project, Gear.Heavy)
      Gear.weapon150Percent(project, Gear.Tech)
    }

    if (gnome === 0 && jinn >= 5 && energy >= 8) {
      project.cards.pending = Cards.EvilGod.LordOfFlies
    }
  }
}
