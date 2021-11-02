import type { DetailsHTMLAttributes, FunctionComponent } from "react"

import type { Icon } from "react-feather"

export interface NavigationButtonProps extends DetailsHTMLAttributes<HTMLButtonElement> {
    icon: Icon
}

export type NavigationButtonComponent = FunctionComponent<NavigationButtonProps>
