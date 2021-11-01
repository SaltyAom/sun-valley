import { ChevronDown, MoreHorizontal, Square } from 'react-feather'

import style from '../../../file-explorer.module.sass'

const Toolbar = () => {
    return (
        <nav className="relative flex w-full gap-2 pl-4 pt-1 pb-3">
            <button className={`${style.action} flex items-center gap-2`}>
                New Folder
                <ChevronDown className="icon" />
            </button>

            <div className={style.divider} />

            <button className={style.action}>
                <Square className="icon" />
            </button>
            <button className={style.action}>
                <Square className="icon" />
            </button>
            <button className={style.action}>
                <Square className="icon" />
            </button>
            <button className={style.action}>
                <Square className="icon" />
            </button>
            <button className={style.action}>
                <Square className="icon" />
            </button>

            <div className={style.divider} />

            <button className={`${style.action} flex items-center gap-0.5`}>
                Sort
                <ChevronDown className="icon" />
            </button>
            <button className={`${style.action} flex items-center gap-0.5`}>
                View
                <ChevronDown className="icon" />
            </button>

            <div className={style.divider} />

            <button className={style.action}>
                <MoreHorizontal className="icon" />
            </button>
        </nav>
    )
}

export default Toolbar
