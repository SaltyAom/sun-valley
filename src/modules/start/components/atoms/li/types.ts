import type { FunctionComponent } from 'react'

export interface LiProps {
    icon?: JSX.Element | string
    title: JSX.Element | string
    detail?: JSX.Element | string
}

export type LiComponent = FunctionComponent<LiProps>
