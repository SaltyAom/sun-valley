import { ChevronDown, Star } from "react-feather"

import style from '../../../file-explorer.module.sass'

const Sidebar = () => {
    return (
        <aside className="flex flex-col w-[160px] text-gray-800 p-0.5 h-full border-r">
            <button className="flex items-center gap-1 p-1.5 hover:bg-gray-100 text-xs focus:bg-gray-100 transition-colors rounded-sm">
                <ChevronDown className={style['sidebar-icon']} />
                <Star className={style['sidebar-icon']} />
                <h6>Quick Access</h6>
            </button>
        </aside>
    )
}

export default Sidebar