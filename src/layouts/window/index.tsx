import { useEffect, useReducer, useRef, useState } from 'react'
import type { Reducer, MouseEventHandler } from 'react'

import { Minus, Square, X } from 'react-feather'

import type { WindowComponent } from './types'

import style from './window.module.sass'

enum Resize {
    none,
    top,
    left,
    bottom,
    right,
    topLeft,
    topRight,
    bottomLeft,
    bottomRight
}

const minSize: [number, number] = [360, 240]

const Window: WindowComponent = ({ app: { name, icon }, children }) => {
    const [position, updatePosition] = useReducer<
        Reducer<[number, number], [number, number]>
    >((v, arg) => [v[0] + arg[0], v[1] + arg[1]], [0, 0])
    const [size, updateSize] = useReducer<
        Reducer<[number, number], [number, number]>
    >(
        (v, arg) => {
            const width = v[0] + arg[0]
            const height = v[1] + arg[1]

            return [
                width >= minSize[0] ? width : minSize[0],
                height >= minSize[1] ? height : minSize[1]
            ]
        },
        [480, 360]
    )

    const [actioning, updateAction] = useState(false)

    const drag = useRef(false)
    const resize = useRef(Resize.none)

    const startDrag: MouseEventHandler = () => {
        drag.current = true
        updateAction(true)
    }

    const startResize = (action: Resize) => () => {
        resize.current = action
        updateAction(true)
    }

    useEffect(() => {
        const handleMove = (event: MouseEvent) => {
            if (drag.current)
                updatePosition([
                    position[0] + event.movementX,
                    position[1] + event.movementY
                ])
        }

        const handleResize = (event: MouseEvent) => {
            if (resize.current === Resize.none) return

            const { movementX: x, movementY: y } = event

            switch (resize.current) {
                case Resize.top:
                    updateSize([0, y * -1])
                    updatePosition([0, y])
                    break

                case Resize.bottom:
                    updateSize([0, y * 1])
                    break

                case Resize.left:
                    updateSize([x * -1, 0])
                    updatePosition([x, 0])
                    break

                case Resize.right:
                    updateSize([x, 0])
                    break

                case Resize.topLeft:
                    updateSize([x * -1, y * -1])
                    updatePosition([x, y])
                    break

                case Resize.topRight:
                    updateSize([x, y * -1])
                    updatePosition([0, y])
                    break

                case Resize.bottomLeft:
                    updateSize([x * -1, y])
                    updatePosition([x, 0])
                    break

                case Resize.bottomRight:
                    updateSize([x, y])
                    break
            }
        }

        document.addEventListener('mousemove', handleMove, {
            passive: true
        })

        document.addEventListener('mousemove', handleResize, {
            passive: true
        })

        const stopHandler = () => {
            drag.current = false
            resize.current = Resize.none
            updateAction(false)
        }

        ;['mouseup', 'mouseleave'].forEach((event) => {
            document.addEventListener(event, stopHandler, {
                passive: true
            })
        })

        return () => {
            document.removeEventListener('mousemove', handleMove)
            document.removeEventListener('mousemove', handleResize)
            ;['mouseup', 'mouseleave'].forEach((event) => {
                document.removeEventListener(event, stopHandler)
            })
        }
    }, [])

    return (
        <>
            {actioning && <style dangerouslySetInnerHTML={{
                __html: `
                    * {
                        user-select: none;
                        -webkit-user-select: none;
                    }
                `
            }} />}
            <article
                className={`fixed z-0 flex flex-col items-start bg-white rounded-lg ${style.window}`}
                style={{
                    top: position[1],
                    left: position[0],
                    width: size[0],
                    height: size[1]
                }}
            >
                <div
                    className={`absolute top-0 w-full h-[2px] ${style['drag-vertical']}`}
                    onMouseDown={startResize(Resize.top)}
                />
                <div
                    className={`absolute bottom-0 w-full h-[2px] ${style['drag-vertical']}`}
                    onMouseDown={startResize(Resize.bottom)}
                />
                <div
                    className={`absolute left-0 w-[2px] h-full ${style['drag-horizontal']} `}
                    onMouseDown={startResize(Resize.left)}
                />
                <div
                    className={`absolute right-0 w-[2px] h-full ${style['drag-horizontal']} `}
                    onMouseDown={startResize(Resize.right)}
                />
                <div
                    className={`absolute top-0 left-0 w-[4px] h-[4px] ${style['drag-left-slash']}`}
                    onMouseDown={startResize(Resize.topLeft)}
                />
                <div
                    className={`absolute top-0 right-0 w-[4px] h-[4px] ${style['drag-right-slash']}`}
                    onMouseDown={startResize(Resize.topRight)}
                />
                <div
                    className={`absolute bottom-0 left-0 w-[4px] h-[4px] ${style['drag-right-slash']}`}
                    onMouseDown={startResize(Resize.bottomLeft)}
                />
                <div
                    className={`absolute bottom-0 right-0 w-[4px] h-[4px] ${style['drag-left-slash']}`}
                    onMouseDown={startResize(Resize.bottomRight)}
                />

                <header
                    className="flex flex-row justify-between w-full h-[36px] cursor-default"
                    onMouseDown={startDrag}
                >
                    <section className="flex flex-row items-center flex-1">
                        <img
                            className="w-[16px] h-[16px] object-contain mx-2"
                            src={icon}
                            alt={name}
                        />
                        <h2 className="text-sm text-gray-700">{name}</h2>
                    </section>
                    <section className="flex flex-row h-[32px] text-gray-700">
                        <button className="px-2.5 h-auto">
                            <Minus className="w-[16px] h-[16px]" />
                        </button>
                        <button className="px-2.5 h-auto">
                            <Square className="w-[14px] h-[14px]" />
                        </button>
                        <button className="px-2.5 h-auto">
                            <X className="w-[16px] h-[16px]" />
                        </button>
                    </section>
                </header>
                <main className="flex flex-col flex-1 w-full">{children}</main>
            </article>
        </>
    )
}

export default Window
