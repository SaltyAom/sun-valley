import type { FunctionComponent, HTMLProps } from 'react'

export interface TextInputProps {
    name?: string
    label: string
    prefix?: JSX.Element
    className?: string
    autoFocus?: boolean
}

export type TextInputComponent = FunctionComponent<TextInputProps | HTMLProps<HTMLInputElement>>
