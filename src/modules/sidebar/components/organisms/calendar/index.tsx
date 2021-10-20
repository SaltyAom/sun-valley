import dayjs from 'dayjs'

import { Triangle } from 'react-feather'

import styles from '@modules/sidebar/sidebar.module.sass'

const Sidebar = () => {
    const date = dayjs()
    const firstDay = Array(date.startOf('month').day()).fill(null)
    const lastDayOfLastMonth = date.subtract(1, 'month').endOf('month').date()
    const currentDay = date.date()

    return (
        <section className={`${styles.pane} vibrance`}>
            <aside className="flex flex-row justify-between items-center px-1 py-2">
                <button
                    role="heading"
                    aria-level={5}
                    className="w-full text-left text-sm font-semibold px-2.5 py-1.5 rounded light-overlay"
                >
                    {date.format('MMMM YYYY')}
                </button>
                <section className="flex flex-row items-center gap-1">
                    <button className="p-2.5 light-overlay rounded">
                        <Triangle
                            width={12}
                            height={12}
                            className="text-gray-400 transform scale-75"
                            fill="currentColor"
                        />
                    </button>
                    <button className="p-2.5 light-overlay rounded">
                        <Triangle
                            width={12}
                            height={12}
                            className="text-gray-400 transform rotate-180 scale-75"
                            fill="currentColor"
                        />
                    </button>
                </section>
            </aside>
            <section className="grid grid-cols-7 grid-rows-[7] gap-1">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                    <p key={day} className={`${styles.date} cursor-default`}>
                        {day}
                    </p>
                ))}
                {firstDay.map((_, index) => (
                    <button
                        key={`l${index}`}
                        className={`${styles.date} text-gray-400`}
                    >
                        {lastDayOfLastMonth - (firstDay.length - 1 - index)}
                    </button>
                ))}
                {Array(date.daysInMonth())
                    .fill(null)
                    .map((_, index) => (
                        <button
                            key={index + 1}
                            className={`${styles.date} ${
                                currentDay === index + 1
                                    ? styles['-active']
                                    : ''
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                {Array(6 - date.endOf('month').day())
                    .fill(null)
                    .map((_, index) => (
                        <button
                            key={`n${index}`}
                            className={`${styles.date} text-gray-400`}
                        >
                            {index + 1}
                        </button>
                    ))}
            </section>
        </section>
    )
}

export default Sidebar
