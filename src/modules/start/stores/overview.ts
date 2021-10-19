import { atom, useAtom } from 'jotai'

export type OverviewPage = 'quick' | 'apps' | 'recommended'
export const overviewPageAtom = atom<OverviewPage>('quick')
export const useOverviewPage = () => useAtom(overviewPageAtom)
