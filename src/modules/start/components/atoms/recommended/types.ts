import type { FunctionComponent } from 'react'

export interface RecommendedProps {
    name: string
    subTitle?: string
    icon: string
}

export type RecommendedComponent = FunctionComponent<RecommendedProps>
