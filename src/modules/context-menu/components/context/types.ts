import type { FunctionComponent, ButtonHTMLAttributes } from 'react'

export interface ContextProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> {
    icon?: JSX.Element | string
    title: JSX.Element | string
    suffix?: JSX.Element | string
    menu?: JSX.Element[][]
    dense?: boolean
}

export type ContextComponent = FunctionComponent<ContextProps>
