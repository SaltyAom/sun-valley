import type { FunctionComponent } from 'react'

export interface PinProps {
    name: string
    icon: string
}

export type PinComponent = FunctionComponent<PinProps>
