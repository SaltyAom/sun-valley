import { AnimatePresence } from 'framer-motion'

import { useContextMenu } from '@stores/context-menu'

import { ContextBalloon } from './components'

const ContextMenu = () => {
    const [contextMenus, dispatchContextMenu] = useContextMenu()

    const dismissContextMenu = () => {
        dispatchContextMenu({
            type: 'clear'
        })
    }

    return (
        <section className="fixed w-full h-screen" onClick={dismissContextMenu}>
            <AnimatePresence>
                {contextMenus.map(({ position, contexts, created }, index) => (
                    <ContextBalloon
                        key={`${index}-${created}`}
                        index={index}
                        position={position}
                        contexts={contexts}
                    />
                ))}
            </AnimatePresence>
        </section>
    )
}

export { Context, ContextBalloon } from './components'
export default ContextMenu
