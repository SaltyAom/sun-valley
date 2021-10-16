import { Volume2, Wifi } from 'react-feather'

import { TaskbarItem } from '../../atoms'

import styles from '../../styles.module.sass'

const Network = () => (
    <TaskbarItem
        name="Internet Access"
        interaction="fade"
        className="flex flex-row items-center gap-1"
    >
        <Wifi className={styles['action-icon']} />
        <Volume2 className={styles['action-icon']} />
    </TaskbarItem>
)

export default Network
