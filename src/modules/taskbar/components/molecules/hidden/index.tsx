import { ChevronUp } from 'react-feather'

import { TaskbarItem } from '../..'

import styles from '../../styles.module.sass'

const HiddenItems = () => (
    <TaskbarItem name="Show hidden icons" className={`min-w-[24px] text-xs`}>
        <ChevronUp className={styles['action-icon']} />
    </TaskbarItem>
)

export default HiddenItems
