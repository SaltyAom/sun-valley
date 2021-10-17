import type { FunctionComponent } from 'react'

export interface ContextBalloonProps {
    index: number
    className?: string
    contexts?: JSX.Element[][]
    position: {
        top?: number
        bottom?: number
        left?: number
        right?: number
    }
}

export type ContextBalloonComponent = FunctionComponent<ContextBalloonProps>