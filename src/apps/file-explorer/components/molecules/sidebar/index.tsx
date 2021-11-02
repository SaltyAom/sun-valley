import { SidebarGroup, SidebarItem } from '../..'

const Sidebar = () => {
    return (
        <aside className="flex flex-col w-[180px] text-gray-800 p-0.5 gap-2 h-full border-r overflow-auto">
            <SidebarGroup
                title="Quick Access"
                icon="/system-icons/Quick Access.png"
                items={[
                    <>
                        <SidebarItem
                            pinned
                            title="Document"
                            icon="/system-icons/Folder Documents.png"
                        />
                        <SidebarItem
                            pinned
                            title="Desktop"
                            icon="/system-icons/Desktop.png"
                        />
                        <SidebarItem pinned title="Download" icon="/system-icons/Folder Downloads.png" />
                        <SidebarItem pinned title="Pictures" icon="/system-icons/Folder Pictures.png" />
                        <SidebarItem title="Music" icon="/system-icons/Folder Music.png" />
                        <SidebarItem title="Videos" icon="/system-icons/Folder Videos.png" />
                        <SidebarItem title="Folder" icon="/system-icons/Folder.png" />
                    </>
                ]}
            />
            <SidebarGroup
                title="This PC"
                icon="/system-icons/Computer.png"
                items={[
                    <>
                        <SidebarItem title="C:" icon="/system-icons/Drives/Hardrive Windows.png" />
                        <SidebarItem title="D:" icon="/system-icons/Drives/Hardrive.png" />
                    </>
                ]}
            />
        </aside>
    )
}

export default Sidebar
