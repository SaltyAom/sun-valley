import type { FunctionComponent } from 'react'

import { Resize } from '../hooks'

import style from '../window.module.sass'

const ResizeHandler: FunctionComponent<{
    startResize: (action: Resize) => () => void
}> = ({ startResize }) => (
    <>
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
    </>
)

export default ResizeHandler
