import { MasterMove, MasterMoves } from 'MasterMoves'

export const MagicalShot: MasterMove = {
  id: 'MagicalShot',
  name: 'Magical Shot',
  slot: MasterMoves.Top.Slot,
  effects: () => ['Demon Damage +', 'Confusion vs. Demon', 'Attack Guage +'],
  notes: () => ['Requires that all three cards appear in visible slots']
}
