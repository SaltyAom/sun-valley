import type { FunctionComponent, ButtonHTMLAttributes } from 'react'

export interface ContextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: JSX.Element | string
    title: string
    suffix?: JSX.Element | string
    menu?: JSX.Element[][]
    dense?: boolean
}

export type ContextComponent = FunctionComponent<ContextProps>
