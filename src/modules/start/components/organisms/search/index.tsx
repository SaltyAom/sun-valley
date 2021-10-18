import { MoreHorizontal } from 'react-feather'

import { StartLayout } from '@modules/start/layouts'
import {
    Card,
    SearchBar,
    SearchOptions
} from '@modules/start/components'

import styles from '@modules/start/styles.module.sass'

const Search = () => (
    <StartLayout width={720}>
        <SearchBar />

        <nav className="flex flex-row justify-between pl-5 pr-8">
            <SearchOptions />
            <section className="flex flex-row items-center">
                <button>
                    <MoreHorizontal className="icon" />
                </button>
            </section>
        </nav>

        <h5 className={styles['sub-title']}>Top Apps</h5>
        <section className="grid grid-cols-5 gap-2 px-8">
            <Card name="Microsoft Edge" icon="/apps/edge.png" />
            <Card name="File Explorer" icon="/apps/file-explorer.png" />
            <Card name="Windows Terminal" icon="/apps/windows-terminal.png" />
        </section>

        <h5 className={styles['sub-title']}>Recent</h5>
    </StartLayout>
)

export default Search
