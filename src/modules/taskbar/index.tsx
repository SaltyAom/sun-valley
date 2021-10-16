import {
    WindowButton,
    DateTime,
    Network,
    Language,
    HiddenItems,
    TaskbarApp
} from './components'

const Taskbar = () => {
    return (
        <nav
            id="nav"
            className="fixed z-50 bottom-0 left-0 flex flex-row justify-center items-center gap-1 w-full h-[48px]"
            style={{
                backgroundColor: 'rgba(255,255,255,.8)',
                backdropFilter: 'blur(16px)'
            }}
        >
            <WindowButton />
            <TaskbarApp name="File Explorer" icon="/apps/file-explorer.png" />
            <TaskbarApp name="Microsoft Edge" icon="/apps/edge.png" />
            <TaskbarApp name="Windows Terminal" icon="/apps/windows-terminal.png" />

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
