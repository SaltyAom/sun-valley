import { TaskbarItem } from '..'

import type { TaskbarAppComponent } from './types'

const TaskbarApp: TaskbarAppComponent = ({ name, icon, ...props }) => (
    <TaskbarItem name={name} {...props}>
        <img className="w-[26px] h-[26px] m-auto object-contain" src={icon} alt={name} />
    </TaskbarItem>
)

export default TaskbarApp
