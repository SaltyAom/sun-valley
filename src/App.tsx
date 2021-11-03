import { useApps } from '@stores/apps'

import { AnimatePresence } from 'framer-motion'

import { Contextable, Window } from '@layouts'

import Taskbar from './modules/taskbar'
import Start from './modules/start'
import ContextMenu from './modules/context-menu'
import Sidebar from './modules/sidebar'

import { desktopContextMenu } from '@data/default'

const App = () => {
    const [apps] = useApps()

    return (
        <Contextable contexts={desktopContextMenu}>
            <main
                id="sun-valley"
                className="w-full h-screen bg-center bg-cover"
                style={{
                    backgroundImage: 'url(/wallpaper/win11.webp)'
                    // backgroundImage: 'url(/wallpaper/opened.webp)'
                    // backgroundImage: 'url(/wallpaper/shiroko.webp)'
                }}
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
        </Contextable>
    )
}

export default App
