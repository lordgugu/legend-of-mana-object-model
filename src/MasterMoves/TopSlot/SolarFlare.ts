import { MasterMove, MasterMoves } from 'MasterMoves'

export const SolarFlare: MasterMove = {
  id: 'SolarFlare',
  name: 'Solar Flare',
  slot: MasterMoves.Top.Slot,
  effects: () => ['Wisp Damage']
}
