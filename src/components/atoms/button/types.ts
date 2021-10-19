import type { ButtonHTMLAttributes, FunctionComponent } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export type ButtonComponent = FunctionComponent<ButtonProps>
