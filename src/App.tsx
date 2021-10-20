import type { DOMAttributes } from 'react'

import { useContextMenu } from '@stores/context-menu'

import Taskbar from './modules/taskbar'
import Start from './modules/start'
import ContextMenu, { Context } from './modules/context-menu'
import Sidebar from './modules/sidebar'

const App = () => {
    const [, dispatchContextMenu] = useContextMenu()

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
                top: pageY + 2,
                left: pageX + 2
            },
            contexts: [
                [
                    <Context
                        title="View"
                        menu={[
                            [
                                <Context
                                    title="Large icons"
                                    suffix="Crtl+Shift+2"
                                />,
                                <Context
                                    title="Medium icons"
                                    suffix="Crtl+Shift+3"
                                />,
                                <Context
                                    title="Small icons"
                                    suffix="Crtl+Shift+4"
                                />
                            ],
                            [
                                <Context title="Auto arrange icons" />,
                                <Context title="Align icons to grid" />
                            ],
                            [<Context title="Show desktop icons" />]
                        ]}
                    />,
                    <Context
                        title="Sort by"
                        menu={[
                            [
                                <Context title="View" />,
                                <Context title="Size" />,
                                <Context title="Item type" />,
                                <Context title="Data modified" />
                            ]
                        ]}
                    />,
                    <Context title="Refresh" />
                ],
                [
                    <Context
                        title="New"
                        menu={[
                            [
                                <Context
                                    icon="/apps/file-explorer.png"
                                    title="Folder"
                                />,
                                <Context
                                    icon="/apps/file-explorer.png"
                                    title="Shortcut"
                                />,
                                <Context
                                    icon="/apps/file-explorer.png"
                                    title="Text Document"
                                />
                            ]
                        ]}
                    />
                ],
                [
                    <Context title="Display settings" />,
                    <Context title="Personalize" />
                ],
                [<Context title="Open in Windows Terminal" />],
                [<Context title="Show more options" suffix="Shift+F10" />],
                [
                    <Context
                        title="My"
                        menu={[
                            [
                                <Context
                                    title="custom"
                                    menu={[
                                        [
                                            <Context
                                                title="Fluent"
                                                menu={[
                                                    [
                                                        <Context
                                                            title="context"
                                                            menu={[
                                                                [
                                                                    <Context title="menu" />
                                                                ]
                                                            ]}
                                                        />
                                                    ]
                                                ]}
                                            />
                                        ]
                                    ]}
                                />
                            ]
                        ]}
                    />
                ]
            ]
        })
    }

    return (
        <main
            id="sun-valley"
            className="w-full h-screen bg-center bg-cover"
            style={{
                // backgroundImage: 'url(/wallpaper/win11.jpeg)'
                // backgroundImage: 'url(/wallpaper/opened.webp)',
                backgroundImage: 'url(/wallpaper/shiroko.webp)'
            }}
            onContextMenu={showSelectionMenu}
        >
            <Start />
            <Taskbar />
            <ContextMenu />
            <Sidebar />
        </main>
    )
}

export default App
