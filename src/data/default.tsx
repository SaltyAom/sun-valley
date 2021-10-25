import { Context } from '@modules/context-menu'

export const desktopContextMenu = [
    [
        <Context
            title="View"
            menu={[
                [
                    <Context title="Large icons" suffix="Crtl+Shift+2" />,
                    <Context title="Medium icons" suffix="Crtl+Shift+3" />,
                    <Context title="Small icons" suffix="Crtl+Shift+4" />
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
                    <Context icon="/apps/file-explorer.png" title="Folder" />,
                    <Context icon="/apps/file-explorer.png" title="Shortcut" />,
                    <Context
                        icon="/apps/file-explorer.png"
                        title="Text Document"
                    />
                ]
            ]}
        />
    ],
    [<Context title="Display settings" />, <Context title="Personalize" />],
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
                                                    [<Context title="menu" />]
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