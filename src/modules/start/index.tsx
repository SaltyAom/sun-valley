import { AnimatePresence } from 'framer-motion'

import { useStartMenuType, useStartMenuVisibility } from '@stores/start'

import {
    KeyboardListener,
    Overview,
    Overlay,
    Search,
    Resetter
} from './components'

const StartMenu = () => {
    const [visibility] = useStartMenuVisibility()
    const [type] = useStartMenuType()

    return (
        <>
            {/* <AnimateSharedLayout> */}
            <AnimatePresence>
                {visibility &&
                    (type === 'overview' ? <Overview /> : <Search />)}
            </AnimatePresence>
            {/* </AnimateSharedLayout> */}

            <AnimatePresence>{visibility && <Resetter />}</AnimatePresence>
            {visibility && <Overlay />}
            <KeyboardListener />
        </>
    )
}

export default StartMenu
