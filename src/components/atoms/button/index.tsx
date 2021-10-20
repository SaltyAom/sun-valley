import type { ButtonComponent } from './types'

import styles from './button.module.sass'

const Button: ButtonComponent = ({ children, className, ...props }) => (
    <button
        className={`flex flex-row justify-center items-center text-xs text-gray-600 px-2 bg-gray-50 hover:opacity-75 focus:opacity-75 border border-gray-200 rounded transition-opacity ${styles.button} ${className}`}
        {...props}
    >
        {children}
    </button>
)

export default Button
