import { useEffect, useReducer, useRef, useState } from 'react'
import type { MouseEventHandler, Reducer } from 'react'

const minSize: [number, number] = [360, 240]
const initSize: [number, number] = [720, 480]

export enum Resize {
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

const useWindow = () => {
    const [size, updateSize] = useReducer<
        Reducer<[number, number], [number, number]>
    >((v, arg) => {
        const width = v[0] + arg[0]
        const height = v[1] + arg[1]

        return [
            width >= minSize[0] ? width : minSize[0],
            height >= minSize[1] ? height : minSize[1]
        ]
    }, initSize)

    const [position, updatePosition] = useReducer<
        Reducer<[number, number], [number, number]>
    >(
        (v, arg) => {
            let x = v[0] + arg[0]
            let y = v[1] + arg[1]

            if (x < 0 || x > document.body.offsetWidth - size[0]) x = v[0]
            if (y < 0 || y > document.body.offsetHeight - size[1] - 48) y = v[1]

            return [x, y]
        },
        [0, 0]
    )

    useEffect(() => {
        updatePosition([
            (document.body.offsetWidth - initSize[0]) / 2,
            (document.body.offsetHeight - initSize[1]) / 2 - 48
        ])
    }, [])

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

    return {
        size,
        position,
        actioning,
        startDrag,
        startResize
    }
}

export default useWindow
