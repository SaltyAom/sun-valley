import type { FunctionComponent } from 'react'

export interface AnimatePageProps {
    condition: boolean
    start?: boolean
}

export type AnimatePageComponent = FunctionComponent<AnimatePageProps>
