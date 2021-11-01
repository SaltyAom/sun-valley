import { Suspense } from 'react'

import { motion } from 'framer-motion'

import { Minimize2, Minus, Square, X } from 'react-feather'
import ResizeHandler from './components/resizeHandler'

import { useManager, useWindow } from './hooks'

import type { WindowComponent } from './types'

import style from './window.module.sass'

const Window: WindowComponent = ({
    app,
    app: { name, icon, app: Applet = null, className = '' },
}) => {
    const { position, size, actioning, startDrag, startResize } = useWindow()
    const { minimize, maximize, close, prioritize, isMaximize, animation } =
        useManager(app, {
            position,
            size
        })

    return (
        <motion.article
            className={`fixed z-0 flex flex-col items-start bg-white border border-gray-300 vibrance ${style.window} ${className}`}
            onMouseDown={prioritize}
            initial={{
                opacity: 0,
                scale: 0.75,
                borderWidth: 1,
                borderRadius: '0.5em'
            }}
            transition={{
                duration: 0
            }}
            animate={animation}
            exit={{
                opacity: 0,
                scale: 0.75,
                transition: {
                    duration: 0.16
                }
            }}
        >
            {actioning && (
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                        * {
                            user-select: none;
                            -webkit-user-select: none;
                        }
                    `
                    }}
                />
            )}

            <ResizeHandler startResize={startResize} />
            <header
                className="flex flex-row justify-between w-full h-[36px] cursor-default overflow-hidden rounded-t-lg"
                onMouseDown={startDrag}
                onTouchStart={startDrag}
            >
                <section className="flex flex-row items-center flex-1">
                    <img
                        className={`w-[16px] h-[16px] object-contain mx-2 ${style.icon}`}
                        src={icon}
                        alt={name}
                    />
                    <h2 className="text-sm text-gray-700">{name}</h2>
                </section>
                <section className="flex flex-row h-[32px] text-gray-700">
                    <button
                        className="px-4 h-auto hover:bg-gray-200 focus:bg-gray-200 transition-colors rounded-none"
                        onClick={minimize}
                    >
                        <Minus
                            strokeWidth={1.5}
                            className="w-[16px] h-[16px]"
                        />
                    </button>
                    <button
                        className="px-4 h-auto hover:bg-gray-200 focus:bg-gray-200 transition-colors rounded-none"
                        onClick={maximize}
                    >
                        {isMaximize ? (
                            <Minimize2
                                strokeWidth={1.5}
                                className="w-[14px] h-[14px]"
                            />
                        ) : (
                            <Square
                                strokeWidth={1.5}
                                className="w-[14px] h-[14px]"
                            />
                        )}
                    </button>
                    <button
                        className="px-4 h-auto hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 transition-colors rounded-none"
                        onClick={close}
                    >
                        <X strokeWidth={1.5} className="w-[16px] h-[16px]" />
                    </button>
                </section>
            </header>
            <main className="flex flex-col flex-1 w-full overflow-auto rounded-b-lg">
                {Applet && (
                    <Suspense fallback={<div />}>
                        <Applet />
                    </Suspense>
                )}
            </main>
        </motion.article>
    )
}

export default Window
