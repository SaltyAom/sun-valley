import Taskbar from './modules/taskbar'

function App() {
    return (
        <main
            id="sun-valley"
            className="w-full h-screen bg-center bg-cover"
            style={{
                backgroundImage: 'url(/wallpaper/win11.jpeg)'
            }}
        >
            <Taskbar />
        </main>
    )
}

export default App
