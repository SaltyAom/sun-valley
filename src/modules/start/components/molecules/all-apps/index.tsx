import { useOverviewPage } from '@modules/start/stores'

import { Button } from '@atoms'
import { Li } from '@modules/start/components'

import { ChevronLeft } from 'react-feather'

import styles from '@modules/start/styles.module.sass'

const AllApps = () => {
    const [, updatePage] = useOverviewPage()

    const back = () => {
        updatePage('quick')
    }

    return (
        <>
            <header className={`${styles.heading} py-4 px-8`}>
                <h5 className={styles['sub-title']}>Recommended</h5>
                <Button className="mr-8" onClick={back}>
                    <ChevronLeft
                        width="1.125em"
                        className="mr-1 text-gray-500"
                    />
                    More
                </Button>
            </header>
            <ol className="flex flex-col w-full px-12 list-none">
                <Li title={<p className="pl-2">F</p>} />
                <Li icon="/apps/file-explorer.png" title="File Explorer" />
            </ol>
        </>
    )
}

export default AllApps
