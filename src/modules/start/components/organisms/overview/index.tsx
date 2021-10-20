import { useEffect } from 'react'

import { useStartMenuType } from '@stores/start'

import { useOverviewPage } from '@modules/start/stores'
import { AnimatePage, StartLayout } from '@modules/start/layouts'
import {
    AllApps,
    QuickOverview,
    RecommendedPage,
    SearchBar
} from '@modules/start/components'

import { Power } from 'react-feather'

import { Tooltip } from '@atoms'

const Overview = () => {
    const [, updateStartMenuType] = useStartMenuType()
    const [page] = useOverviewPage()

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
        <StartLayout className="justify-between" width={640}>
            <button
                onClick={toggleSearchMenu}
                className="cursor-text"
                tabIndex={-1}
            >
                <SearchBar className="pointer-events-none" />
            </button>

            <section className="flex flex-col flex-1 min-w-[1px] min-h-[1px]">
                <AnimatePage start condition={page === 'quick'}>
                    <QuickOverview />
                </AnimatePage>

                <AnimatePage condition={page === 'apps'}>
                    <AllApps />
                </AnimatePage>

                <AnimatePage condition={page === 'recommended'}>
                    <RecommendedPage />
                </AnimatePage>
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
