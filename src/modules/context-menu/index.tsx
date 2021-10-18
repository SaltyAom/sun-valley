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
        <AnimatePresence>
            {contextMenus.length && (
                <section
                    className="fixed z-[100] w-full h-screen"
                    onClick={dismissContextMenu}
                >
                    {contextMenus.map(
                        ({ position, contexts, created }, index) => (
                            <ContextBalloon
                                key={`${index}-${created}`}
                                index={index}
                                position={position}
                                contexts={contexts}
                            />
                        )
                    )}
                </section>
            )}
        </AnimatePresence>
    )
}

export { Context, ContextBalloon } from './components'
export default ContextMenu
