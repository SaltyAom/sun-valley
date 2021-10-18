import { atom, useAtom } from 'jotai'

export const startMenuVisibilityAtom = atom(false)
export const useStartMenuVisibility = () => useAtom(startMenuVisibilityAtom)

export const toggleMenuVisibilityAtom = atom(
    (get) => get(startMenuVisibilityAtom),
    (get, set) => {
        set(startMenuVisibilityAtom, !get(startMenuVisibilityAtom))
    }
)
export const useToggleStartMenu = () => useAtom(toggleMenuVisibilityAtom)

export type StartMenuType = "overview" | "search"

export const startMenuTypeAtom = atom<StartMenuType>("overview")
export const useStartMenuType = () => useAtom(startMenuTypeAtom)
