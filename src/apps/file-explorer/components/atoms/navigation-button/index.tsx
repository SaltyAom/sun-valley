import type { NavigationButtonComponent } from "./types"

const NavigationButton: NavigationButtonComponent = ({ icon: Icon }) => {
    return (
        <button className="flex justify-center items-center w-[28px] h-[28px] rounded-sm hover:bg-gray-100 focus:bg-gray-100 transition-colors">
            <Icon className="icon text-gray-400" strokeWidth={3} />
        </button>
    )
}

export default NavigationButton