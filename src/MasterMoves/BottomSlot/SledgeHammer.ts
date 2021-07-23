import { MasterMove, MasterMoves } from 'MasterMoves'

export const SledgeHammer: MasterMove = {
  id: 'SledgeHammer',
  name: 'Sledge Hammer',
  slot: MasterMoves.Bottom.Slot,
  effects: () => ['Poltergeist Damage +', 'Dizzy vs. Poltergeist']
}
