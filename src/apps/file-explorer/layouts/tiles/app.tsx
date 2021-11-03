import type { AppLauncherComponent } from 'types'

const TileApp: AppLauncherComponent = ({ app: { name, icon } }) => {
    return (
        <button
            className="flex gap-2 px-1 rounded hover:bg-blue-400 hover:bg-opacity-10 focus:bg-blue-400 focus:bg-opacity-25 acitve:bg-blue-400 active:bg-opacity-25"
        >
            <img src={icon} className="w-[48px] h-[48px]" />
            <h3 className="text-xs text-gray-800 pt-1">{name}</h3>
        </button>
    )
}

export default TileApp
