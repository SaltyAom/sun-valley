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
        <>
            <AnimatePresence>
                {contextMenus.length && (
                    <section
                        className="fixed z-[90] w-full h-screen"
                        onClick={dismissContextMenu}
                        onTouchEnd={dismissContextMenu}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {contextMenus.length && (
                    <>
                        {contextMenus.map(({ created, ...props }, index) => (
                            <ContextBalloon
                                key={`${index}-${created}`}
                                index={index}
                                {...props}
                            />
                        ))}
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export { Context, ContextBalloon } from './components'
export default ContextMenu
