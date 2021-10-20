import { useOverviewPage } from '@modules/start/stores'

import { ChevronRight, Power } from 'react-feather'

import { Button, Tooltip } from '@atoms'
import { Pin, Recommended } from '@modules/start/components'

import styles from '@modules/start/styles.module.sass'

const QuickView = () => {
    const [, updatePage] = useOverviewPage()

    const toAllApps = () => {
        updatePage('apps')
    }

    const toRecommended = () => {
        updatePage('recommended')
    }

    return (
        <>
            <section className="flex flex-col w-full px-8">
                <header className={`${styles.heading} py-4`}>
                    <h5 className={styles['sub-title']}>Pinned</h5>
                    <Button className="mr-8" onClick={toAllApps}>
                        All apps
                        <ChevronRight
                            width="1.125em"
                            className="ml-1 text-gray-500"
                        />
                    </Button>
                </header>
                <section className="grid grid-cols-6 items-start h-[228px] overflow-hidden">
                    <Pin icon="/apps/edge.svg" name="Edge" />
                    <Pin icon="/apps/file-explorer.png" name="Explorer" />
                </section>
            </section>

            <section className="flex flex-col w-full px-8">
                <header className={`${styles.heading} pt-1 pb-4`}>
                    <h5 className={styles['sub-title']}>Recommended</h5>
                    <Button className="mr-8" onClick={toRecommended}>
                        More
                        <ChevronRight
                            width="1.125em"
                            className="ml-1 text-gray-500"
                        />
                    </Button>
                </header>
                <section className="grid grid-cols-2 justify-start items-start h-[174px] px-5 gap-y-2 gap-x-4 overflow-hidden">
                    <Recommended
                        icon="/apps/edge.svg"
                        name="Microsoft Edge"
                        subTitle="17m ago"
                    />
                    <Recommended
                        icon="/apps/file-explorer.png"
                        name="File Explorer"
                        subTitle="34m ago"
                    />
                </section>
            </section>
        </>
    )
}

export default QuickView
