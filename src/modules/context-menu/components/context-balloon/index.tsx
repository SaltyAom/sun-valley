import { Fragment, useState, useReducer, useEffect, useRef } from 'react'

import { motion, useAnimation } from 'framer-motion'

import { getContextMenuHeight } from '@modules/context-menu/services'
import { expo } from '@services/ease'

import type { ContextBalloonComponent } from './types'

import styles from '@modules/context-menu/context.module.sass'

const ContextBalloon: ContextBalloonComponent = ({
    position,
    contexts = [],
    index,
    className = '',
    bottomUp = false
}) => {
    const height = getContextMenuHeight(contexts)

    const [left, updateLeft] = useState(0)
    const [isInit, init] = useReducer(() => true, false)
    const menu = useRef<HTMLElement>(null)

    const animate = useAnimation()

    useEffect(() => {
        const width = menu.current!.clientWidth
        const previousWidth =
            index <= 0
                ? undefined
                : document.getElementById(`context-${index - 1}`)!.clientWidth + width - 8

        if (position.left && position.left > document.body.clientWidth - width)
            updateLeft(position.left - (previousWidth ?? width))
        else updateLeft(position.left ?? 0)

        init()
        animate.start({
            height,
            marginTop: 0,
            transition: {
                ease: expo.in,
                duration: 0.48
            }
        })
    }, [])

    const marginTop = bottomUp ? height : 0

    return (
        <motion.aside
            ref={menu}
            id={`context-${index}`}
            className={`absolute z-[100] flex flex-col gap-0.5 justify-center max-w-[290px] border border-gray-200 rounded-lg vibrance overflow-hidden ${styles.balloon} ${className}`}
            style={{
                ...position,
                left,
                height: 0,
                marginTop,
                visibility: !isInit ? 'hidden' : undefined
            }}
            animate={{
                height,
                marginTop: 0,
                transition: {
                    ease: expo.in,
                    duration: 0.48
                }
            }}
            exit={{
                height: 0,
                transition: {
                    ease: expo.out,
                    duration: 0.2
                }
            }}
        >
            {contexts.map((row, index) => (
                <Fragment key={index}>
                    {row.map((context, index) => (
                        <Fragment key={index}>{context}</Fragment>
                    ))}
                    {index !== contexts.length - 1 && (
                        <div className="w-full h-[1px] my-1 bg-gray-300" />
                    )}
                </Fragment>
            ))}
        </motion.aside>
    )
}

export default ContextBalloon
