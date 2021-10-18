import { useState, useRef, useCallback } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import styles from './tooltip.module.sass'

import type { TooltipComponent } from './types'

const Tooltip: TooltipComponent = ({
    children,
    title,
    className = '',
    fluid = false,
    tooltipClassName = '',
    tooltipStyle = {}
}) => {
    const [isPeeking, updatePeek] = useState(false)
    const [fadingOut, updateFadingOut] = useState(false)
    const timeout = useRef<number | null>(null)

    const peek = useCallback(() => {
        if (timeout.current) clearTimeout(timeout.current)

        // @ts-ignore
        timeout.current = setTimeout(() => {
            updatePeek(true)
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    updateFadingOut(true)
                })
            })

            if (timeout.current) clearTimeout(timeout.current)
        }, 800)
    }, [])

    const unpeek = useCallback(() => {
        updateFadingOut(false)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                updatePeek(false)

                if (timeout.current) clearTimeout(timeout.current)
            })
        })
    }, [])

    return (
        <section className="relative">
            <AnimatePresence>
                {isPeeking && (
                    <motion.header
                        className={`${styles.tooltip} ${
                            fluid ? styles['-fluid'] : ''
                        } ${
                            fadingOut ? styles['-active'] : ''
                        } ${tooltipClassName}`}
                        style={tooltipStyle}
                        transition={{
                            duration: 0.16
                        }}
                        exit={{
                            paddingRight: 0
                        }}
                    >
                        <h4 className={`${styles.tip} vibrance`}>{title}</h4>
                    </motion.header>
                )}
            </AnimatePresence>
            <section
                className={className}
                onMouseEnter={peek}
                onMouseLeave={unpeek}
            >
                {children}
            </section>
        </section>
    )
}

export default Tooltip
