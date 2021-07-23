import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Gear } from 'Forge/Gear'
import { Project, Projects } from 'Forge/Projects'
import { ActiveItem, Items } from 'Items'

export const GiantsHorn: ActiveItem = {
  id: 'GiantsHorn',
  name: "Giant's Horn",
  category: Items.FangClaw.Category,
  energy: 32,
  activate: (project: Project) => {
    const { energy } = project
    const salamander = project.levels[Essences.Salamander]
    const gnome = project.levels[Essences.Gnome]

    if (project.type === Projects.Weapon) {
      Gear.weapon050Percent(project, Gear.Sharp)
      Gear.weapon150Percent(project, Gear.Heavy)
    }

    if (salamander === 0 && gnome >= 5 && energy >= 8) {
      project.cards.pending = Cards.EvilGod.Leviathan
    }
  }
}
