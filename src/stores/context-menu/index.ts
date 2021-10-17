import { atom, useAtom } from 'jotai'

export type Position = {
    top?: number
    bottom?: number
    left?: number
    right?: number
}

export interface ContextMenuAppend {
    type: 'append'
    position?: Position
    contexts: JSX.Element[][]
    index?: number
    autoWidth?: boolean
}

export interface ContextMenuPop {
    type: 'pop'
}

export interface ContextMenuClear {
    type: 'clear'
}

export type ContextMenuActions =
    | ContextMenuAppend
    | ContextMenuPop
    | ContextMenuClear

export interface ContextMenus {
    created: number
    position: Position
    contexts: JSX.Element[][]
}

export const contextMenuAtom = atom<ContextMenus[]>([])
export const contextMenuReducerAtom = atom<ContextMenus[], ContextMenuActions>(
    (get) => get(contextMenuAtom),
    (get, set, action) => {
        const { type } = action

        switch (type) {
            case 'append':
                const { index = 0 } = action
                const menus = get(contextMenuAtom)

                let previousMenus = []
                for (let i = 0; i <= index; i++)
                    if (menus[i]) previousMenus.push(menus[i])

                const { offsetTop, offsetLeft, clientWidth } =
                    document.getElementById(`context-${index}`) ?? {
                        offsetTop: 0,
                        offsetLeft: 0,
                        clientWidth: 0
                    }

                const position = {
                    ...action.position,
                    top:
                        action.position?.top ??
                        (action.position?.bottom ? undefined : offsetTop + 4),
                    left:
                        action.position?.left ??
                        (action.position?.right
                            ? undefined
                            : offsetLeft + clientWidth - 4)
                }

                set(contextMenuAtom, [
                    ...previousMenus,
                    {
                        created: Date.now(),
                        position,
                        contexts: action.contexts
                    }
                ])
                break

            case 'pop':
                const contexts = [...get(contextMenuAtom)]
                contexts.pop()

                set(contextMenuAtom, contexts)
                break

            case 'clear':
                set(contextMenuAtom, [])
                break
        }
    }
)

export const useBaseContextMenu = () => useAtom(contextMenuAtom)
export const useContextMenu = () => useAtom(contextMenuReducerAtom)
