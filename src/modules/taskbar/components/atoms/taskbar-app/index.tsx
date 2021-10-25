import { useApps } from '@stores/apps'

import { TaskbarItem } from '..'

import type { TaskbarAppComponent } from './types'

const TaskbarApp: TaskbarAppComponent = ({ app, onClick, ...props }) => {
    const [, dispatch] = useApps()

    let handleClick = onClick
    if (!handleClick)
        handleClick = () => {
            dispatch({
                type: 'append',
                app
            })
        }

    return (
        <TaskbarItem name={app.name} onClick={handleClick} {...props}>
            <img
                className="w-[26px] h-[26px] m-auto object-contain"
                src={app.icon}
                alt={app.name}
            />
        </TaskbarItem>
    )
}

export default TaskbarApp
