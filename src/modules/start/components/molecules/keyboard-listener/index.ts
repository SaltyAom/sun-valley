import { useEffect, useRef } from 'react'

import { useToggleStartMenu } from '@stores/start'

const KeyboardListener = () => {
    const [, toggleStartMenu] = useToggleStartMenu()
    const pressing = useRef<string[]>([])

    useEffect(() => {
        window.addEventListener(
            'keydown',
            (event) => {
                if(!pressing.current.includes(event.code))
                    pressing.current.push(event.code)
            },
            {
                passive: true
            }
        )

        window.addEventListener(
            'keyup',
            () => {
                if (
                    pressing.current.length === 1 &&
                    pressing.current.includes('MetaLeft') || pressing.current.includes("MetaRight")
                )
                    toggleStartMenu()

                pressing.current = []
            },
            {
                passive: true
            }
        )
    }, [])

    return null
}

export default KeyboardListener
