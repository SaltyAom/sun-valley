import { NavigationBar, Status, Toolbar, Sidebar } from './components'

const FileExplorer = () => {
    return (
        <main className="flex flex-col w-full h-full overflow-hidden">
            <Toolbar />
            <NavigationBar />
            <main className="flex flex-col flex-1 bg-white overflow-hidden">
                <Sidebar />
            </main>
            <Status />
        </main>
    )
}

export default FileExplorer
