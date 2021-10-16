import { FunctionComponent } from 'react'

export interface TextInputProps {
    name?: string
    label: string
    prefix?: JSX.Element
    className?: string
}

export type TextInputComponent = FunctionComponent<TextInputProps>
