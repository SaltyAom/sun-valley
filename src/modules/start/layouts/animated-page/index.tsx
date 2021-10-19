import { AnimatePresence, motion } from 'framer-motion'

import type { AnimatePageComponent } from './types'

import styles from './animate-page.module.sass'

const duration = 0.16

const animate = {
    start: {
        style: {
            translateX: 24,
            opacity: 0,
            position: 'absolute'
        },
        transition: {
            ease: [0.16, 1, 0.3, 1],
            duration
        },
        animate: {
            position: 'relative',
            translateX: 0,
            opacity: 1,
            transition: {
                delay: duration / 2
            }
        },
        exit: {
            translateX: -24,
            opacity: 0
        }
    },
    end: {
        style: {
            translateX: 24,
            opacity: 0
        },
        transition: {
            ease: [0.16, 1, 0.3, 1],
            duration
        },
        animate: {
            translateX: 0,
            opacity: 1,
            transition: {
                delay: duration / 2
            }
        },
        exit: {
            translateX: -24,
            opacity: 0
        }
    }
} as const

const AnimatePage: AnimatePageComponent = ({
    children,
    condition,
    start = false
}) => (
    <AnimatePresence>
        {condition && (
            <motion.main
                className={styles['animate-page']}
                {...(start ? animate.start : animate.end)}
            >
                {children}
            </motion.main>
        )}
    </AnimatePresence>
)

export default AnimatePage
