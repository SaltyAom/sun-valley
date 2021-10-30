import type { FunctionComponent } from 'react'

import { Resize } from '../hooks'

import style from '../window.module.sass'

const ResizeHandler: FunctionComponent<{
    startResize: (action: Resize) => () => void
}> = ({ startResize }) => (
    <>
        <div
            className={`absolute top-[-8px] w-full h-[16px] ${style['drag-vertical']}`}
            onMouseDown={startResize(Resize.top)}
            onTouchStart={startResize(Resize.top)}
        />
        <div
            className={`absolute bottom-[-8px] w-full h-[16px] ${style['drag-vertical']}`}
            onMouseDown={startResize(Resize.bottom)}
            onTouchStart={startResize(Resize.bottom)}
        />
        <div
            className={`absolute left-[-8px] w-[16px] h-full ${style['drag-horizontal']} `}
            onMouseDown={startResize(Resize.left)}
            onTouchStart={startResize(Resize.left)}
        />
        <div
            className={`absolute right-[-8px] w-[16px] h-full ${style['drag-horizontal']} `}
            onMouseDown={startResize(Resize.right)}
            onTouchStart={startResize(Resize.right)}
        />
        <div
            className={`absolute z-10 top-[-8px] left-[-8px] w-[24px] h-[24px] ${style['drag-left-slash']}`}
            onMouseDown={startResize(Resize.topLeft)}
            onTouchStart={startResize(Resize.topLeft)}
        />

        {/* Top right corner to get around close button */}
        <div
            className={`absolute top-[-6px] right-[-6px] w-[24px] h-[12px] ${style['drag-right-slash']}`}
            onMouseDown={startResize(Resize.topRight)}
            onTouchStart={startResize(Resize.topRight)}
        />
        <div
            className={`absolute top-[-6px] right-[-6px] w-[12px] h-[24px] ${style['drag-right-slash']}`}
            onMouseDown={startResize(Resize.topRight)}
            onTouchStart={startResize(Resize.topRight)}
        />

        <div
            className={`absolute bottom-[-8px] left-[-8px] w-[24px] h-[24px] ${style['drag-right-slash']}`}
            onMouseDown={startResize(Resize.bottomLeft)}
            onTouchStart={startResize(Resize.bottomLeft)}
        />
        <div
            className={`absolute bottom-[-8px] right-[-8px] w-[24px] h-[24px] ${style['drag-left-slash']}`}
            onMouseDown={startResize(Resize.bottomRight)}
            onTouchStart={startResize(Resize.bottomRight)}
        />
    </>
)

export default ResizeHandler
