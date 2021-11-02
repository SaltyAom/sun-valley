import {
    ArrowLeft,
    ArrowRight,
    ChevronDown,
    ArrowUp,
    Search
} from 'react-feather'

import { NavigationButton } from '../..'

const NavigationBar = () => {
    return (
        <nav className="flex w-full bg-white gap-2 p-2">
            <NavigationButton icon={ArrowLeft} />
            <NavigationButton icon={ArrowRight} />
            <NavigationButton icon={ChevronDown} />
            <NavigationButton icon={ArrowUp} />

            <form className="flex items-center flex-1 py-1 border border-gray-300">
                {/* <input placeholder="Search Quick Access" /> */}
            </form>
            <form
                className="flex items-center flex-1 max-w-[240px] py-1 border border-gray-300"
                onSubmit={(event) => {
                    event?.preventDefault()
                }}
            >
                <Search
                    className="icon text-gray-500 ml-2 mr-1"
                    width={18}
                    height={18}
                />
                <input
                    className="flex flex-1 text-sm text-gray-600 outline-none"
                    placeholder="Search Quick Access"
                />
            </form>
        </nav>
    )
}

export default NavigationBar
