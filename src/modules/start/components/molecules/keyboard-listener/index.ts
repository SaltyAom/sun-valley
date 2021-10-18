import { useEffect } from 'react'

import { useToggleStartMenu } from '@stores/start'

const KeyboardListener = () => {
    const [, toggleStartMenu] = useToggleStartMenu()

    useEffect(() => {
        window.addEventListener(
            'keydown',
            (event) => {
                if (event.key === 'Meta') toggleStartMenu()
            },
            {
                passive: true
            }
        )
    }, [])

    return null
}

export default KeyboardListener
