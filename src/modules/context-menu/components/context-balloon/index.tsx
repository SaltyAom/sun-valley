import { Fragment } from 'react'

import { motion } from 'framer-motion'

import type { ContextBalloonComponent } from './types'

import styles from '../../context.module.sass'

const ContextBalloon: ContextBalloonComponent = ({
    position,
    contexts = [],
    index,
    className = ''
}) => {
    const em = 16
    const height =
        // each slot height
        contexts.flat(2).length * 32 +
        // divider height
        contexts.length * em * 0.25 * 2 +
        // padding top-bottom
        em * 0.25 * 2 +
        // grid gap
        contexts.length * em * .125 * 2

    return (
        <motion.aside
            id={`context-${index}`}
            className={`absolute flex flex-col gap-0.5 justify-center border border-gray-200 rounded-lg vibrance overflow-hidden ${styles.balloon} ${className}`}
            style={{ ...position, height: 0 }}
            animate={{
                height,
                transition: {
                    ease: [0.16, 1, 0.3, 1],
                    duration: 0.48
                }
            }}
            exit={{
                height: 0,
                transition: {
                    ease: [0.7, 0, 0.84, 0],
                    duration: 0.16
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
