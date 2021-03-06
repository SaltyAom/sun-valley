import appsMap from '@data/apps'
import { useToggleStartMenu, useStartMenuType } from '@stores/start'

import {
    WindowButton,
    DateTime,
    Network,
    Language,
    HiddenItems,
    TaskbarApp
} from './components'

const Taskbar = () => {
    const [visible, toggleStartMenu] = useToggleStartMenu()
    const [type, updateStartMenuType] = useStartMenuType()

    const toggleSearchMenu = () => {
        if (visible && type !== 'search') updateStartMenuType('search')
        else {
            toggleStartMenu()
            updateStartMenuType('search')
        }
    }

    return (
        <nav
            id="nav"
            className="fixed z-50 bottom-0 left-0 flex flex-row justify-center items-center gap-1 w-full h-[48px] vibrance"
        >
            <WindowButton />
            <TaskbarApp
                onClick={toggleSearchMenu}
                app={{
                    name: 'Search',
                    icon: '/apps/search.svg',
                    short: 'Search'
                }}
            />
            <TaskbarApp app={appsMap['File Explorer']} />
            <TaskbarApp app={appsMap['Microsoft Edge']} />
            <TaskbarApp app={appsMap['Window Terminal']} />

            <aside className="absolute right-0 flex flex-row items-center h-inherit gap-1 px-2">
                <HiddenItems />
                <Language />
                <Network />
                <DateTime />
            </aside>
        </nav>
    )
}

export default Taskbar
