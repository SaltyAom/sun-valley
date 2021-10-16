import type { FunctionComponent, ButtonHTMLAttributes } from 'react'

export interface TaskbarItemProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string
    interaction?: 'scale' | 'fade'
    popupClassName?: string
}

export type TaskbarItemComponent = FunctionComponent<TaskbarItemProps>
