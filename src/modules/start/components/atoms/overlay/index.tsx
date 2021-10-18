import { useStartMenuVisibility } from '@stores/start'

const Overlay = ({ fullscreen = false }) => {
    const [, updateStartMenu] = useStartMenuVisibility()

    const dismiss = () => {
        updateStartMenu(false)
    }

    if (fullscreen)
        return (
            <div
                className="fixed top-0 left-0 z-40 w-full h-screen"
                onClick={dismiss}
            />
        )

    return <div className="absolute w-full h-full" onClick={dismiss} />
}

export default Overlay
