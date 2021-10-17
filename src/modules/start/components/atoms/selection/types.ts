import type { ButtonHTMLAttributes, FunctionComponent } from 'react'

export interface StartMenuSelectionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    activeColor?: string
    className?: string
    active?: boolean
}

export type StartMenuSelectionComponent = FunctionComponent<StartMenuSelectionProps>
