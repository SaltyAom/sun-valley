import { atom, useAtom } from 'jotai'

export type SearchType = 'all' | 'apps' | 'documents' | 'settings'
export const searchTypes: readonly SearchType[] = [
    'apps',
    'documents',
    'settings'
] as const

export const searchAtom = atom<string>('')
export const useSearch = () => useAtom(searchAtom)
