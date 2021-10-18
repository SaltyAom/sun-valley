import type { FunctionComponent, ButtonHTMLAttributes } from 'react'

export interface TaskbarAppProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string
    icon: string
}

export type TaskbarAppComponent = FunctionComponent<TaskbarAppProps>
