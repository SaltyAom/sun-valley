import type { DOMAttributes } from 'react'

import { useContextMenu } from '@stores/context-menu'
import { useApps } from '@stores/apps'

import { AnimatePresence } from 'framer-motion'

import { Window } from '@layouts'

import Taskbar from './modules/taskbar'
import Start from './modules/start'
import ContextMenu from './modules/context-menu'
import Sidebar from './modules/sidebar'

import { desktopContextMenu } from '@data/default'

const App = () => {
    const [, dispatchContextMenu] = useContextMenu()
    const [apps] = useApps()

    const showSelectionMenu: DOMAttributes<HTMLElement>['onClick'] = (
        event
    ) => {
        event.preventDefault()

        const { pageX, pageY } = event

        dispatchContextMenu({
            type: 'clear'
        })

        dispatchContextMenu({
            type: 'append',
            position: {
                top: pageY + 1,
                left: pageX + 1
            },
            contexts: desktopContextMenu
        })
    }

    return (
        <main
            id="sun-valley"
            className="w-full h-screen bg-center bg-cover"
            style={{
                backgroundImage: 'url(/wallpaper/win11.jpeg)'
                // backgroundImage: 'url(/wallpaper/opened.webp)'
                // backgroundImage: 'url(/wallpaper/shiroko.webp)'
            }}
            onContextMenu={showSelectionMenu}
        >
            <section className="fixed z-0 w-full h-screen">
                <AnimatePresence>
                    {apps.map((app) => (
                        <Window key={app.id} app={app} />
                    ))}
                </AnimatePresence>
            </section>
            <Start />
            <Taskbar />
            <ContextMenu />
            <Sidebar />
        </main>
    )
}

export default App
