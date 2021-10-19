import { useEffect, useRef } from 'react'

import { useToggleStartMenu } from '@stores/start'
import { useContextMenu } from '@stores/context-menu'

const KeyboardListener = () => {
    const [, dispatchContext] = useContextMenu()
    const [, toggleStartMenu] = useToggleStartMenu()

    const pressing = useRef<string[]>([])

    useEffect(() => {
        window.addEventListener(
            'keydown',
            (event) => {
                if (!pressing.current.includes(event.code))
                    pressing.current.push(event.code)
            },
            {
                passive: true
            }
        )

        window.addEventListener('keyup', (event) => {
            if (
                (pressing.current.length === 1 &&
                    pressing.current.includes('MetaLeft')) ||
                pressing.current.includes('MetaRight')
            ) {
                event.preventDefault()
                toggleStartMenu()
                dispatchContext({
                    type: 'clear'
                })
            }

            pressing.current = []
        })
    }, [])

    return null
}

export default KeyboardListener
