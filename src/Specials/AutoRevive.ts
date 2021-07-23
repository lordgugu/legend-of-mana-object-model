import { Special } from 'Specials'

export const AutoRevive: Special = {
  id: 'AutoRevive',
  name: 'Auto-Revive',
  effect: ['Immediately revives the wearer when they are knocked out'],
  notes: [
    'Each revival consumes a Phoenix card',
    'If no visible Phoenix cards remain, the ability is lost',
    'Requires that the Phoenix card be the top-most visible card granting a special ability'
  ]
}
