import { useRef } from 'react'
import type { DOMAttributes } from 'react'

import { useContextMenu } from '@stores/context-menu'

import type { ContextableComponent } from './types'

const Contextable: ContextableComponent = ({
    contexts,
    className = 'flex w-full h-full',
    children
}) => {
    const deferTouch = useRef<NodeJS.Timeout | null>()

    const [, dispatchContextMenu] = useContextMenu()

    const showContextMenu = (pageX: number, pageY: number) => {
        dispatchContextMenu({
            type: 'clear'
        })

        dispatchContextMenu({
            type: 'append',
            position: {
                top: pageY + 1,
                left: pageX + 1
            },
            contexts
        })
    }

    const handleClick: DOMAttributes<HTMLElement>['onClick'] = (event) => {
        event.preventDefault()

        if(deferTouch.current) return

        const { pageX, pageY } = event

        showContextMenu(pageX, pageY)
    }

    const handleTouch: DOMAttributes<HTMLElement>['onTouchStart'] = (event) => {
        deferTouch.current = setTimeout(() => {
            const { touches } = event
            const { pageX, pageY } = touches[0]

            showContextMenu(pageX, pageY)

            requestAnimationFrame(() => {
                deferTouch.current = null
            })
        }, 625)
    }

    const handleUntouch = () => {
        if(deferTouch.current)
            clearTimeout(deferTouch.current)

        deferTouch.current = null
    }

    return (
        <div
            className={className}
            onContextMenu={handleClick}
            onTouchStart={handleTouch}
            onTouchEnd={handleUntouch}
        >
            {children}
        </div>
    )
}

export default Contextable
