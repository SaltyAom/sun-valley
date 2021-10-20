import { motion } from 'framer-motion'

import { Overlay } from '@modules/start/components'
import styles from '@modules/start/styles.module.sass'

import { expo } from '@services/ease'

import type { StartLayoutComponent } from './types'

const StartLayout: StartLayoutComponent = ({
    children,
    width = 640,
    className = ''
}) => (
    <motion.section
        className={`fixed z-50 w-full px-2 ${styles['start-menu']}`}
        style={{
            bottom: '-640px'
        }}
        animate={{
            bottom: '60px',
            transition: {
                ease: expo.in,
                duration: 0.28
            }
        }}
        exit={{
            bottom: '-640px',
            transition: {
                ease: expo.out,
                duration: 0.28
            }
        }}
    >
        <Overlay />
        <aside
            className={`flex flex-col w-full h-full mx-auto vibrance rounded ${className}`}
            style={{
                maxWidth: width
            }}
        >
            {children}
        </aside>
    </motion.section>
)

export default StartLayout
