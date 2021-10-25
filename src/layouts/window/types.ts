import type { FunctionComponent } from "react"
import type { App } from "@data/apps"

export interface WindowProps {
    app: App
}

export type WindowComponent = FunctionComponent<WindowProps>