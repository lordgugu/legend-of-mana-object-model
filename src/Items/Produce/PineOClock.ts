import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Immunities } from 'Forge/Immunities'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const PineOClock: ActiveItem = {
  id: 'PineOClock',
  name: "Pine o'Clock",
  category: Items.Produce.Category,
  energy: 24,
  activate: (project: Project) => {
    const { energy } = project
    const salamander = project.levels[Essences.Salamander]
    const gnome = project.levels[Essences.Gnome]
    const jinn = project.levels[Essences.Jinn]
    const undine = project.levels[Essences.Undine]

    if (project.type === Projects.Equipment) {
      Immunities.set(project, Immunities.Sleep)
    }

    if (salamander * gnome * jinn * undine > 0 && energy >= 8) {
      project.cards.pending = Cards.World.Ragnarok
    }
  }
}
