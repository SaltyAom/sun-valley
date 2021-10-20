import { contextHeight } from '@modules/context-menu/components'

const em = 16

export const getContextMenuHeight = (contexts: unknown[][]) =>
    // each slot height
    contexts.flat(2).length * contextHeight +
    // divider height
    contexts.length * em * 0.25 * 2 +
    // padding top-bottom
    em * 0.25 * 2 +
    // grid gap
    contexts.length * em * 0.125 * 2
