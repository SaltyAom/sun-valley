import { NavigationBar, Status, Toolbar, Sidebar, ThisPC } from './components'

const FileExplorer = () => {
    return (
        <main className="flex flex-col w-full h-full overflow-hidden">
            <Toolbar />
            <NavigationBar />
            <section className="flex flex-row flex-1 bg-white overflow-hidden">
                <Sidebar />
                <main className="flex flex-col flex-1 gap-2 p-1">
                    <ThisPC />
                </main>
            </section>
            <Status />
        </main>
    )
}

export default FileExplorer
