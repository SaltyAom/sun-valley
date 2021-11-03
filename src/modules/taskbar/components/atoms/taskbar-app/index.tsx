import { useAppLauncher } from '@stores/apps'

import { TaskbarItem } from '..'

import type { TaskbarAppComponent } from './types'

const TaskbarApp: TaskbarAppComponent = ({ app, onClick, ...props }) => {
    const launch = useAppLauncher(app)

    return (
        <TaskbarItem name={app.name} onClick={onClick ?? launch} {...props}>
            <img
                className="w-[26px] h-[26px] m-auto object-contain"
                src={app.icon}
                alt={app.name}
            />
        </TaskbarItem>
    )
}

export default TaskbarApp
