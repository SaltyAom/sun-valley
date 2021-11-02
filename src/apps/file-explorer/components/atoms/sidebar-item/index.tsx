import { ChevronRight, MapPin } from 'react-feather'

import style from '../../../file-explorer.module.sass'

import type { SideBarItemComponent } from './types'

const SidebarItem: SideBarItemComponent = ({
    title,
    chevron = false,
    chevronDown = false,
    pinned = false,
    icon,
    className = '',
    ...props
}) => {
    return (
        <button
            className={`flex items-center gap-1 p-1.5 hover:bg-gray-100 text-xs focus:bg-gray-100 transition-colors rounded-sm ${className}`}
            {...props}
        >
            {chevron && (
                <ChevronRight
                    className={style['sidebar-icon']}
                    style={{
                        transform: chevronDown ? 'rotate(90deg)' : ''
                    }}
                />
            )}
            {icon && <img src={icon} className={style['sidebar-icon']} />}
            <h6 className="text-gray-600">{title}</h6>
            {pinned && (
                <img src="/icons/pin.png" alt="Pin" className={`w-[14px] h-[14px] ml-auto ${style.pin}`} />
            )}
        </button>
    )
}

export default SidebarItem
