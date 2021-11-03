import { lazy } from 'react'
import type { LazyExoticComponent } from "react"

export interface App {
    name: string
    icon: string
    short?: string
    app?: LazyExoticComponent<any>
    className?: string
}

export type Apps = App[]

const apps = [
    {
        name: 'Microsoft Edge',
        icon: '/apps/edge.svg',
        short: 'Edge'
    },
    {
        name: 'File Explorer',
        icon: '/apps/file-explorer.png',
        short: 'Explorer',
        app: lazy(() => import("@apps/file-explorer")),
        className: 'bg-opacity-75'
    },
    {
        name: 'Window Terminal',
        icon: '/apps/windows-terminal.png',
        short: 'Terminal'
    }
]

export const appsMap = apps
    .map((app) => ({
        [app.name]: app
    }))
    .reduce((acc, cur) => ({ ...acc, ...cur }))

export default appsMap
