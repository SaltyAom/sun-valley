import type { FunctionComponent } from 'react'

export interface TaskbarAppProps {
    name: string
    icon: string
}

export type TaskbarAppComponent = FunctionComponent<TaskbarAppProps>
