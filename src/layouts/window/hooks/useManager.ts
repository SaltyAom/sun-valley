import { useEffect, useState } from 'react'

import { useAnimation } from 'framer-motion'
import { expo } from '@services/ease'

import { useApps } from '@stores/apps'
import type { ActiveApp } from '@stores/apps'

const useManager = (
    app: ActiveApp,
    {
        position,
        size
    }: {
        position: [number, number]
        size: [number, number]
    }
) => {
    const [, dispatch] = useApps()
    const animation = useAnimation()

    const [isMaximize, updateMaximize] = useState(false)
    const [isMinimize, updateMinimize] = useState(false)

    useEffect(() => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                animation.start({
                    opacity: 1,
                    scale: 1,
                    transition: {
                        duration: 0.24,
                        ease: expo.in
                    }
                })
            })
        })
    }, [])

    useEffect(() => {
        if (!isMaximize)
            animation.set({
                top: position[1],
                left: position[0],
                width: size[0],
                height: size[1]
            })
    }, [size, position, isMaximize])

    const maximize = () => {
        if (isMaximize) {
            animation.start({
                top: position[1],
                left: position[0],
                width: size[0],
                height: size[1],
                borderRadius: '0.5em',
                borderWidth: 1,
                transition: {
                    duration: 0.24,
                    ease: expo.inOut
                }
            })
            return updateMaximize(false)
        }

        animation.start({
            width: '100%',
            height: 'calc(100vh - 48px)',
            top: 0,
            left: 0,
            borderRadius: 0,
            borderWidth: 0,
            transition: {
                duration: 0.24,
                ease: expo.inOut
            }
        })

        updateMaximize(true)
    }

    const minimize = () => {
        if (isMinimize) {
            animation.start({
                top: position[1],
                left: position[0],
                width: size[0],
                height: size[1],
                transition: {
                    duration: 0.24,
                    ease: expo.inOut
                }
            })
            return updateMinimize(false)
        }

        console.log('min')
        animation.start({
            opacity: 0,
            scale: 0.75,
            transition: {
                duration: 0.16
            }
        })

        updateMinimize(true)
    }

    const close = () => {
        dispatch({
            type: 'close',
            id: app.id
        })
    }

    const prioritize = () => {
        dispatch({
            type: 'prioritize',
            id: app.id
        })
    }

    return {
        isMaximize,
        isMinimize,
        prioritize,
        maximize,
        minimize,
        close,
        animation
    }
}

export default useManager
