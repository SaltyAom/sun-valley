import { useStartMenuType } from '@stores/start'

import { Power } from 'react-feather'

import { StartLayout } from '@modules/start/layouts'
import { Pin, Recommended, SearchBar } from '@modules/start/components'

import styles from '@modules/start/styles.module.sass'
import { useEffect } from 'react'
import { Tooltip } from '@components'

const Overview = () => {
    const [, updateStartMenuType] = useStartMenuType()

    const toggleSearchMenu = () => {
        updateStartMenuType('search')
    }

    useEffect(() => {
        const handleSearch = (event: KeyboardEvent) => {
            if (
                event.metaKey ||
                event.shiftKey ||
                event.altKey ||
                event.ctrlKey ||
                event.code === 'Tab' ||
                event.code.startsWith('Arrow')
            )
                return

            toggleSearchMenu()
        }

        window.addEventListener('keydown', handleSearch, {
            passive: true
        })

        return () => {
            window.removeEventListener('keydown', handleSearch)
        }
    }, [])

    return (
        <StartLayout width={640}>
            <button onClick={toggleSearchMenu} className="cursor-text" tabIndex={-1}>
                <SearchBar className="pointer-events-none" />
            </button>

            <section className="flex flex-col w-full px-8">
                <h5 className={`${styles['sub-title']} mt-4`}>Pinned</h5>
                <section className="grid grid-cols-6 items-start h-[228px] overflow-hidden">
                    <Pin icon="/apps/edge.svg" name="Edge" />
                    <Pin icon="/apps/file-explorer.png" name="Explorer" />
                </section>
            </section>

            <section className="flex flex-col w-full px-8">
                <h5 className={styles['sub-title']}>Recommended</h5>
                <section className="grid grid-cols-2 justify-start items-start h-[166px] px-5 gap-y-2 gap-x-4 overflow-hidden">
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
        </StartLayout>
    )
}

export default Overview
