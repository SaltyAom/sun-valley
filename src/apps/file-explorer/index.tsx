import { Status, Toolbar, Sidebar } from './components'

const FileExplorer = () => {
    return (
        <>
            <Toolbar />
            <main className="flex flex-col flex-1 bg-white">
                <Sidebar />
            </main>
            <Status />
        </>
    )
}

export default FileExplorer
