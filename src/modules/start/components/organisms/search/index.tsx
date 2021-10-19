import { MoreHorizontal } from 'react-feather'

import { StartLayout } from '@modules/start/layouts'
import { Card, Li, SearchBar, SearchOptions } from '@modules/start/components'

import styles from '@modules/start/styles.module.sass'

const Search = () => {
    return (
        <StartLayout width={720}>
            <SearchBar />

            <nav className="flex flex-row justify-between pl-5 pr-8 mb-2">
                <SearchOptions />
                <section className="flex flex-row items-center">
                    <button>
                        <MoreHorizontal className="icon" />
                    </button>
                </section>
            </nav>

            <h5 className={`${styles['sub-title']} py-4`}>Top Apps</h5>
            <section className="grid grid-cols-5 gap-2 px-8 mb-4">
                <Card name="Microsoft Edge" icon="/apps/edge.svg" />
                <Card name="File Explorer" icon="/apps/file-explorer.png" />
                <Card
                    name="Windows Terminal"
                    icon="/apps/windows-terminal.png"
                />
            </section>

            <h5 className={`${styles['sub-title']} py-4`}>Recent</h5>
            <ol className="flex flex-col w-full px-8 list-none">
                <Li title="Microsoft Edge" icon="/apps/edge.svg" />
            </ol>
        </StartLayout>
    )
}

export default Search
