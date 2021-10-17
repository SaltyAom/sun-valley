import { useState, useEffect } from 'react'

import dayjs from 'dayjs'

import { Moon } from 'react-feather'

import { TaskbarItem } from '../../atoms'

const DateTime = () => {
    const [time, updateTime] = useState(dayjs().format('H:mm A'))
    const [date, updateDate] = useState(dayjs().format('D/M/YYYY'))

    useEffect(() => {
        let time = new Date()

        setTimeout(() => {
            setInterval(() => {
                updateTime(dayjs().format('H:mm A'))
                updateDate(dayjs().format('D/M/YYYY'))
            }, 1000)
        }, 60000 - time.getSeconds() * 1000 - time.getMilliseconds())
    }, [])

    return (
        <TaskbarItem
            name="Date Time"
            interaction="fade"
            className="flex flex-row items-center"
            popupClassName="!-translate-x-[48px] !items-end"
        >
            <div className="flex flex-col justify-center items-end mr-2">
                <h6 className="text-xs">{time}</h6>
                <h6 className="text-xs">{date}</h6>
            </div>
            <Moon className="icon -mirror" />
        </TaskbarItem>
    )
}

export default DateTime
