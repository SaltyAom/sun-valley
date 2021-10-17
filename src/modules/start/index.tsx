import { useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { useStartMenuVisibility, useToggleStartMenu } from '@stores/start'

import { MoreHorizontal } from 'react-feather'

import { Card, SearchBar, SearchOptions } from './components'

import styles from './styles.module.sass'

const StartMenu = () => {
    const [visibility] = useStartMenuVisibility()
    const toggleStartMenu = useToggleStartMenu()

    useEffect(() => {
        window.addEventListener(
            'keyup',
            (event) => {
                if (event.key === 'Meta') toggleStartMenu()
            },
            {
                passive: true
            }
        )
    }, [])

    return (
        <AnimatePresence>
            {visibility ? (
                <motion.section
                    className={`fixed z-40 w-full px-2 ${styles['start-menu']}`}
                    style={{
                        bottom: '-640px'
                    }}
                    animate={{
                        bottom: '64px',
                        transition: {
                            ease: [0.16, 1, 0.3, 1],
                            duration: 0.28
                        }
                    }}
                    exit={{
                        bottom: '-640px',
                        transition: {
                            ease: [0.7, 0, 0.84, 0],
                            duration: 0.28
                        }
                    }}
                >
                    <aside className="flex flex-col max-w-[720px] w-full h-full mx-auto vibrance rounded">
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
                            <Card
                                name="File Explorer"
                                icon="/apps/file-explorer.png"
                            />
                            <Card
                                name="Windows Terminal"
                                icon="/apps/windows-terminal.png"
                            />
                        </section>

                        <h5 className={styles['sub-title']}>Recent</h5>
                    </aside>
                </motion.section>
            ) : null}
        </AnimatePresence>
    )
}

export default StartMenu
