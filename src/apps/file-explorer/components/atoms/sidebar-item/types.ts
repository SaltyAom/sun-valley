import type { DetailsHTMLAttributes, FunctionComponent } from "react"

export interface SidebarItemProps extends DetailsHTMLAttributes<HTMLButtonElement> {
    title?: string
    icon?: string
    chevron?: boolean
    chevronDown?: boolean
    pinned?: boolean
}

export type SideBarItemComponent = FunctionComponent<SidebarItemProps>
