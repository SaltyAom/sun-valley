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

            <footer
                className="flex flex-row justify-between items-center w-full h-[68px] mt-4 px-12 py-0.5 border-t border-b border-gray-400 bg-[rgba(0,0,0,.025)]"
                style={{
                    borderBottomColor: 'transparent'
                }}
            >
                <Tooltip fluid title="SaltyAom">
                    <button className="flex flex-row items-center py-1 px-3 light-overlay rounded outline-none">
                        <img
                            className="w-[36px] h-[36px] rounded-full"
                            src="https://avatars.githubusercontent.com/u/35027979?s=400&u=28dbe76d9057768eed7cb2d346203b7c55c153ce&v=4"
                            alt="SaltyAom"
                        />
                        <h2 className="text-sm text-gray-700 font-semibold ml-4">
                            Salty Aom
                        </h2>
                    </button>
                </Tooltip>
                <Tooltip title="Power">
                    <button className="w-[42px] h-[42px] rounded-lg cursor-pointer light-overlay outline-none">
                        <Power
                            className="text-gray-500 m-auto"
                            style={{
                                transform: 'scale(.8)'
                            }}
                        />
                    </button>
                </Tooltip>
            </footer>
        </>
    )
}

export default QuickView
