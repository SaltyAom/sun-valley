import TileApp from './app'

import type { AppCollectionComponent } from 'types'

import style from './tiles.module.sass'

const TileLayout: AppCollectionComponent = ({ apps }) => {
    return (
        <main className={`${style.tile} gap-1`}>
            {apps.map((app) => (
                <TileApp key={app.name} app={app} />
            ))}
        </main>
    )
}

export default TileLayout
