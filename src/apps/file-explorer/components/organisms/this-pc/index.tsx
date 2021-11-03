import TileLayout from '@apps/file-explorer/layouts/tiles'

import { Accordion } from '@apps/file-explorer/components'

const ThisPC = () => {
    return (
        <>
            <Accordion title="Folders (6)">
                <TileLayout
                    apps={[
                        {
                            name: 'Desktop',
                            icon: '/system-icons/Folder Desktop.png'
                        },
                        {
                            name: 'Documents',
                            icon: '/system-icons/Folder Documents.png'
                        },
                        {
                            name: 'Downloads',
                            icon: '/system-icons/Folder Downloads.png'
                        },
                        {
                            name: 'Music',
                            icon: '/system-icons/Folder Music.png'
                        },
                        {
                            name: 'Pictures',
                            icon: '/system-icons/Folder Pictures.png'
                        },
                        {
                            name: 'Videos',
                            icon: '/system-icons/Folder Videos.png'
                        }
                    ]}
                />
            </Accordion>
            <Accordion title="Devices and drives (2)">
                <TileLayout
                    apps={[
                        {
                            name: 'Local Disk (C:)',
                            icon: '/system-icons/Drives/Hardrive Windows.png'
                        },
                        {
                            name: 'Local Disk (D:)',
                            icon: '/system-icons/Drives/Hardrive.png'
                        }
                    ]}
                />
            </Accordion>
        </>
    )
}

export default ThisPC
