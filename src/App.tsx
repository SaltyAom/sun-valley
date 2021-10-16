import Taskbar from './modules/taskbar'
import Start from './modules/start'

function App() {
    return (
        <main
            id="sun-valley"
            className="w-full h-screen bg-center bg-cover"
            style={{
                backgroundImage: 'url(/wallpaper/win11.jpeg)'
            }}
        >
            <Start />
            <Taskbar />
        </main>
    )
}

export default App
