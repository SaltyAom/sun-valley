import type { CSSProperties, FunctionComponent } from "react"

export interface TooltipProps {
    title: string
    className?: string
    tooltipClassName?: string
    tooltipStyle?: CSSProperties
    fluid?: boolean
}

export type TooltipComponent = FunctionComponent<TooltipProps>
