import { Essence, Essences, EssencesContext } from 'Forge/Essences'

export function ancientMoon(context: EssencesContext, essence: Essence): void {
  const { energy } = context

  if (energy < 8) {
    return
  }

  switch (essence) {
    case Essences.Wisp:
    case Essences.Shade:
      Essences.increase(context, essence)
      break
    case Essences.Dryad:
    case Essences.Aura:
    case Essences.Salamander:
    case Essences.Gnome:
    case Essences.Jinn:
    case Essences.Undine:
      context.potential[essence]++
      break
  }
}
