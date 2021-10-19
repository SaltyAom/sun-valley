import { atom, useAtom } from 'jotai'

export type SearchType = 'all' | 'apps' | 'documents' | 'settings' | 'folders' | 'music' | 'photos' | 'videos'
export const searchTypes: readonly SearchType[] = [
    'apps',
    'documents',
    'settings',
    'folders',
    'music',
    'photos',
    'videos'
] as const
export const displayedShortcut: readonly SearchType[] = [
    'apps',
    'documents',
    'settings',
] as const


export const searchAtom = atom<string>('')
export const useSearch = () => useAtom(searchAtom)
