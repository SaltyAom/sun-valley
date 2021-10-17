import type { FunctionComponent } from 'react'

export interface CardProps {
    name: string
    icon: string
}

export type CardComponent = FunctionComponent<CardProps>
