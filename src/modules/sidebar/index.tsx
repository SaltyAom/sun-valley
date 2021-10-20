import { AnimatePresence, motion } from 'framer-motion'

import { useSidebar } from './stores'

import { Calendar } from './components'

import { expo } from '@services/ease'

const width = 340

const Sidebar = () => {
    const [sidebar, updateSidebar] = useSidebar()

    const closeSidebar = () => {
        updateSidebar(false)
    }

    return (
        <>
            {sidebar && (
                <section
                    onClick={closeSidebar}
                    className="fixed z-[60] w-full h-screen opacity-0"
                />
            )}

            <AnimatePresence>
                {sidebar && (
                    <motion.aside
                        className="fixed z-[70] mr-2.5 flex flex-col justify-end py-3"
                        transition={{
                            duration: 0.24
                        }}
                        animate={{
                            right: 0,
                            transition: {
                                ease: expo.in
                            }
                        }}
                        exit={{
                            right: -width,
                            transition: {
                                ease: expo.out
                            }
                        }}
                        style={{
                            right: -width,
                            bottom: 48,
                            width,
                            maxHeight: 'calc(100vh - 48px)',
                            willChange: 'right'
                        }}
                    >
                        <Calendar />
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    )
}

export default Sidebar
