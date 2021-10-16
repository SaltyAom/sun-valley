import { ChevronUp } from 'react-feather'

import { TaskbarItem } from '../..'

const HiddenItems = () => (
    <TaskbarItem name="Show hidden icons" className={`min-w-[24px] text-xs`}>
        <ChevronUp className="icon" />
    </TaskbarItem>
)

export default HiddenItems
