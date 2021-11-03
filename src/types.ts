import type { FunctionComponent } from "react"

import type { App, Apps } from "@data/apps"

export interface AppLauncherProps {
    app: App
}

export type AppLauncherComponent = FunctionComponent<AppLauncherProps>

export interface AppCollectionProps {
    apps: Apps
}

export type AppCollectionComponent = FunctionComponent<AppCollectionProps>
