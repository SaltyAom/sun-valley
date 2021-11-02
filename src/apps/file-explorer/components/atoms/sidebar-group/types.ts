import type { FunctionComponent, ReactNode } from "react"

export interface SidebarGroupProps {
    title: string
    icon?: string
    items: ReactNode
}

export type SideBarGroupComponent = FunctionComponent<SidebarGroupProps>
