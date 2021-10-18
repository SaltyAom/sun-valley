import type { FunctionComponent, ButtonHTMLAttributes, CSSProperties } from 'react'

export interface TaskbarItemProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string
    interaction?: 'scale' | 'fade'
    tooltipClassName?: string
    tooltipStyle?: CSSProperties
}

export type TaskbarItemComponent = FunctionComponent<TaskbarItemProps>
