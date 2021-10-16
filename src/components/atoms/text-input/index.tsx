import { useRef } from 'react'

import type { TextInputComponent } from './types'

import styles from './text-input.module.sass'

const TextInput: TextInputComponent = ({
    prefix = null,
    label,
    name = label,
    className = ''
}) => {
    const input = useRef<HTMLInputElement>(null)

    const focusInput = () => {
        input.current?.focus()
    }

    return (
        <div
            className={`relative flex flex-row items-center px-2 py-2 rounded bg-white border border-gray-300 ${styles['text-input']} ${className} cursor-text`}
            onClick={focusInput}
        >
            {prefix}
            <input
                ref={input}
                className="flex flex-1 h-full placeholder-gray-500 px-2 outline-none"
                name={name}
                placeholder={label}
                aria-label={label}
            />
        </div>
    )
}

export default TextInput
