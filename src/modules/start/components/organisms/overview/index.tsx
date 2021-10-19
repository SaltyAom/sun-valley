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
        <StartLayout width={640}>
            <button
                onClick={toggleSearchMenu}
                className="cursor-text"
                tabIndex={-1}
            >
                <SearchBar className="pointer-events-none" />
            </button>

            <AnimatePage start condition={page === 'quick'}>
                <QuickOverview />
            </AnimatePage>

            <AnimatePage condition={page === 'apps'}>
                <AllApps />
            </AnimatePage>

            <AnimatePage condition={page === 'recommended'}>
                <RecommendedPage />
            </AnimatePage>
        </StartLayout>
    )
}

export default Overview
