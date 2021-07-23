import { Essence, Essences, EssencesContext } from 'Forge/Essences'

export function mirroredWorld(context: EssencesContext, essence: Essence): void {
  const { levels, energy } = context
  const { wisp, shade, dryad, aura, salamander, gnome, jinn, undine } = levels

  switch (essence) {
    case Essences.Wisp:
      if (shade === 0 && energy >= 8) {
        Essences.increase(context, Essences.Wisp)
        return
      }

      if (wisp < shade) {
        while (context.levels.wisp > 0) {
          Essences.decrease(context, Essences.Wisp)
        }
      }

      break
    case Essences.Shade:
      if (energy >= 8) {
        Essences.increase(context, Essences.Shade)
      }

      if (wisp < shade) {
        while (context.levels.wisp > 0) {
          Essences.decrease(context, Essences.Wisp)
        }
      }

      break
    case Essences.Dryad:
      if (energy >= 8 && (aura === 0 || wisp === shade)) {
        context.potential.dryad++
        return
      }

      if (wisp < shade) {
        Essences.decrease(context, Essences.Aura)

        if (energy >= 8) {
          context.potential.dryad++
        }
      }

      break
    case Essences.Aura:
      if (energy >= 8 && (dryad === 0 || wisp === shade)) {
        context.potential.aura++
        return
      }

      if (shade < wisp) {
        Essences.decrease(context, Essences.Dryad)

        if (energy >= 8) {
          context.potential.aura++
        }
      }

      break
    case Essences.Salamander:
      if (gnome === 0) {
        Essences.decrease(context, Essences.Undine)

        if (energy >= 8) {
          context.potential.salamander++
        }
      }

      break
    case Essences.Gnome:
      if (jinn === 0) {
        Essences.decrease(context, Essences.Salamander)

        if (energy >= 8) {
          context.potential.gnome++
        }
      }

      break
    case Essences.Jinn:
      if (undine === 0) {
        Essences.decrease(context, Essences.Gnome)

        if (energy >= 8) {
          context.potential.jinn++
        }
      }

      break
    case Essences.Undine:
      if (salamander === 0) {
        Essences.decrease(context, Essences.Jinn)

        if (energy >= 8) {
          context.potential.undine++
        }
      }

      break
  }
}
