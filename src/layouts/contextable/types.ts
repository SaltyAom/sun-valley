import type { FunctionComponent } from "react"

export interface ContextableProps {
    contexts: JSX.Element[][]
    className?: string
}

export type ContextableComponent = FunctionComponent<ContextableProps>
