import { useToggleStartMenu, useStartMenuType } from '@stores/start'

import { TaskbarItem } from '..'

const size = 24
const gap = 1
const fragment = (size - gap) / 2

const fragmentSize = {
    width: fragment,
    height: fragment
}

const WindowIcon = () => {
    const [visible, toggleStartMenu] = useToggleStartMenu()
    const [type, updateStartMenuType] = useStartMenuType()

    const toggleOverviewMenu = () => {
        if (visible && type !== 'overview') updateStartMenuType('overview')
        else toggleStartMenu()
    }


    return (
        <TaskbarItem name="Start" onClick={toggleOverviewMenu}>
            <div className="relative m-auto w-[24px] h-[24px]">
                <div
                    className="absolute top-0 left-0 rounded-tl-sm bg-blue-400"
                    style={fragmentSize}
                />
                <div
                    className="absolute top-0 right-0 rounded-tr-sm bg-blue-500"
                    style={fragmentSize}
                />
                <div
                    className="absolute bottom-0 left-0 rounded-bl-sm bg-blue-500"
                    style={fragmentSize}
                />
                <div
                    className="absolute bottom-0 right-0 rounded-br-sm bg-blue-600"
                    style={fragmentSize}
                />
            </div>
        </TaskbarItem>
    )
}

export default WindowIcon
