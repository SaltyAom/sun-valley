import type { FunctionComponent, ButtonHTMLAttributes } from 'react'

import type { App } from '@data/apps'

export interface TaskbarAppProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
        app: App
}

export type TaskbarAppComponent = FunctionComponent<TaskbarAppProps>
