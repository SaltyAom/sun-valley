import { Tooltip } from '@atoms'

import styles from '@modules/taskbar/styles.module.sass'

import type { TaskbarItemComponent } from './types'

const TaskbarItem: TaskbarItemComponent = ({
    className,
    interaction = 'scale',
    name,
    tooltipClassName = '',
    tooltipStyle = {},
    ...props
}) => (
    <Tooltip
        tooltipClassName={tooltipClassName}
        tooltipStyle={tooltipStyle}
        title={name}
    >
        <button
            className={`min-w-[40px] h-[40px] ${styles['-interact-bg']} ${
                styles[`-interact-${interaction}`] ?? ''
            } p-1 rounded-md ${className}`}
            {...props}
        />
    </Tooltip>
)

export default TaskbarItem
