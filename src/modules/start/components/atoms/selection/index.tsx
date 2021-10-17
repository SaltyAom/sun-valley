import type { StartMenuSelectionComponent } from './types'

import styles from './selection.module.sass'

const Selection: StartMenuSelectionComponent = ({
    children,
    className,
    active,
    activeColor = '#007aff',
    ...props
}) => {
    return (
        <button
            className={`relative flex flex-row justify-center capitalize px-4 pt-2 pb-3 ${
                styles['button']
            } ${active ? styles['-active'] : ''} ${className}`}
            {...props}
        >
            {children}
            <div
                className={`absolute bottom-0 rounded-full ${
                    styles.selection
                } ${active ? styles['-active'] : ''}`}
                style={{
                    backgroundColor: activeColor
                }}
            />
        </button>
    )
}

export default Selection
