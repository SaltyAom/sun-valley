import { atom, useAtom } from 'jotai'

import { nanoid } from 'nanoid'

import type { App } from '@data/apps'

export interface ActiveApp extends App {
    id: string
}

export type ActiveApps = ActiveApp[]

export interface ActiveAppAppend {
    type: 'append'
    app: App
}

export interface ActiveAppClose {
    type: 'close'
    id: string
}

export interface ActiveAppPrioritize {
    type: 'prioritize'
    id: string
}

export type ActiveAppActions =
    | ActiveAppAppend
    | ActiveAppClose
    | ActiveAppPrioritize

export const appsBaseAtom = atom<ActiveApps>([])
export const useBaseApps = () => useAtom(appsBaseAtom)

export const appAtom = atom<ActiveApps, ActiveAppActions>(
    (get) => get(appsBaseAtom),
    (get, set, action) => {
        const { type } = action

        switch (type) {
            case 'append':
                set(appsBaseAtom, [
                    ...get(appsBaseAtom),
                    {
                        ...action.app,
                        id: nanoid()
                    }
                ])
                break

            case 'close':
                const apps = [...get(appsBaseAtom)]
                const target = apps.findIndex((app) => action.id === app.id)

                if (target < 0) break

                apps.splice(target, 1)

                set(appsBaseAtom, apps)
                break

            case 'prioritize':
                const activeApps = [...get(appsBaseAtom)]
                const prioritizeTarget = activeApps.findIndex(
                    (app) => action.id === app.id
                )

                if (prioritizeTarget < 0) break

                const removed = activeApps.splice(prioritizeTarget, 1)

                set(appsBaseAtom, [...activeApps, ...removed])
                break
        }
    }
)

export const useApps = () => useAtom(appAtom)
