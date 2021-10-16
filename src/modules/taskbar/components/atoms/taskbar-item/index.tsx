import { useState, useRef, useCallback } from 'react'

import styles from '../../styles.module.sass'

import type { TaskbarItemComponent } from './types'

const TaskbarItem: TaskbarItemComponent = ({
    className,
    interaction = 'scale',
    popupClassName = '',
    name,
    ...props
}) => {
    const [isPeeking, updatePeek] = useState(false)
    const timeout = useRef<number | null>(null)

    const peek = () => {
        if (timeout.current) clearTimeout(timeout.current)

        timeout.current = setTimeout(() => {
            updatePeek(true)

            if (timeout.current) clearTimeout(timeout.current)
        }, 1000)
    }

    const unpeek = () => {
        updatePeek(false)
        if (timeout.current) clearTimeout(timeout.current)
    }

    return (
        <section className={styles['taskbar-item']}>
            <header className={`${styles['popup']} ${isPeeking ? styles['-active'] : ''} ${popupClassName}`}>
                <h4 className={styles['app-name']}>{name}</h4>
            </header>
            <button
                className={`min-w-[40px] h-[40px] ${styles['-interact-bg']} ${
                    styles[`-interact-${interaction}`] ?? ''
                } p-1 rounded-md ${className}`}
                onMouseEnter={peek}
                onMouseLeave={unpeek}
                {...props}
            />
        </section>
    )
}

export default TaskbarItem
