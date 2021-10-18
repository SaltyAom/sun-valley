import { motion } from 'framer-motion'

import { Overlay } from '@modules/start/components'

import styles from '@modules/start/styles.module.sass'

import type { StartLayoutComponent } from './types'

const StartLayout: StartLayoutComponent = ({ children, width = 640 }) => (
    <motion.section
        className={`fixed z-50 w-full px-2 ${styles['start-menu']}`}
        style={{
            bottom: '-640px'
        }}
        animate={{
            bottom: '64px',
            transition: {
                ease: [0.16, 1, 0.3, 1],
                duration: 0.28
            }
        }}
        exit={{
            bottom: '-640px',
            transition: {
                ease: [0.7, 0, 0.84, 0],
                duration: 0.28
            }
        }}
    >
        <Overlay />
        <aside
            className="flex flex-col w-full h-full mx-auto vibrance rounded"
            style={{
                maxWidth: width
            }}
        >
            {children}
        </aside>
    </motion.section>
)

export default StartLayout
