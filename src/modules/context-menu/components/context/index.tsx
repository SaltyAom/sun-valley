import { useEffect, useRef } from 'react'

import { useContextMenu } from '@stores/context-menu'

import { ChevronRight } from 'react-feather'

import type { ContextComponent } from './types'

import styles from '@modules/context-menu/context.module.sass'

export const height = 32

const Context: ContextComponent = ({ icon, title, suffix, menu, ...props }) => {
    const [context, dispatch] = useContextMenu()

    const button = useRef<HTMLButtonElement>(null)
    const appended = useRef(false)
    const justAppended = useRef(false)

    useEffect(() => {
        const main = () => {
            if (justAppended.current) return (justAppended.current = false)

            appended.current = false
        }

        main()
    }, [context])

    const showContext = () => {
        if (appended.current || !context.length) return

        const current = button.current!
        const id = current.parentElement?.id!
        const index = +id?.replace('context-', '')

        appended.current = true
        justAppended.current = true

        dispatch({
            type: 'append',
            index,
            contexts: menu || [],
            position: {
                top: current.getBoundingClientRect().top + 4
            }
        })
    }

    return (
        <button
            ref={button}
            className={`flex flex-row justify-between gap-16 w-auto items-center min-h-[${height}px] mx-1 px-3 py-1 rounded-lg ${styles.context}`}
            {...props}
            onMouseOver={showContext}
        >
            <header className="flex flex-row flex-1 items-center text-sm text-left text-gray-800">
                {icon ? (
                    <figure className="flex justify-center items-center w-[24px] h-[24px] p-[0.175em] mr-2">
                        {typeof icon === 'string' ? (
                            <img
                                className="object-contain w-full"
                                src={icon}
                                alt={title}
                            />
                        ) : (
                            icon
                        )}
                    </figure>
                ) : null}
                {title}
            </header>
            {menu || suffix ? (
                <p className="font-light text-gray-500 text-sm">
                    {menu ? <ChevronRight className="icon" /> : suffix}
                </p>
            ) : null}
        </button>
    )
}

export default Context
