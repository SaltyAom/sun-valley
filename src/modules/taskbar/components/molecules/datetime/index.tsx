import { Moon } from 'react-feather'

import { TaskbarItem } from '../../atoms'

import styles from '../../styles.module.sass'

const DateTime = () => (
    <TaskbarItem
        name="Date Time awdawoij do"
        interaction="fade"
        className="flex flex-row items-center"
        popupClassName="!-translate-x-[48px] items-end"
    >
        <div className="flex flex-col justify-center items-end mr-2">
            <h6 className="text-xs">1:39 PM</h6>
            <h6 className="text-xs">10/16/2021</h6>
        </div>
        <Moon
            className={styles['action-icon']}
            style={{
                transform: 'scale(.85) scaleX(-1)'
            }}
        />
    </TaskbarItem>
)

export default DateTime
