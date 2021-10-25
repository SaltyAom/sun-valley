import type { FunctionComponent } from "react"
import type { ActiveApp } from "@stores/apps"

export interface WindowProps {
    app: ActiveApp
    className?: string
}

export type WindowComponent = FunctionComponent<WindowProps>