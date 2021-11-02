import { useEffect, useReducer } from 'react'

import { SidebarItem } from '..'

import type { SideBarGroupComponent } from './types'

const SidebarGroup: SideBarGroupComponent = ({ title, items, icon }) => {
    const [isOpen, toggle] = useReducer((v) => !v, false)

    return (
        <section className="flex flex-col gap-1">
            <SidebarItem
                title={title}
                icon={icon}
                chevron
                chevronDown={isOpen}
                onClick={toggle}
            />
            {isOpen && <aside className="flex flex-col pl-6 gap-0.5">{items}</aside>}
        </section>
    )
}

export default SidebarGroup
