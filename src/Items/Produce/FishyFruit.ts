import { Cards } from 'Cards'
import { Essences } from 'Forge/Essences'
import { Project } from 'Forge/Projects'
import { Stats } from 'Forge/Stats'
import { ActiveItem, Items } from 'Items'

export const FishyFruit: ActiveItem = {
  id: 'FishyFruit',
  name: 'Fishy Fruit',
  category: Items.Produce.Category,
  energy: 32,
  activate: (project: Project) => {
    project.cards.pending = Cards.Stage.Spring

    Stats.widenRange(project, Stats.Magic, -1, 3)
    Stats.increment(project, Stats.Magic)

    Essences.taint(project, Essences.Undine)
  }
}
