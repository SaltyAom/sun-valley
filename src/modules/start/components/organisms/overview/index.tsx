import { useStartMenuType } from '@stores/start'

import { Power } from 'react-feather'

import { StartLayout } from '@modules/start/layouts'
import { Pin, Recommended, SearchBar } from '@modules/start/components'

import styles from '@modules/start/styles.module.sass'
import { useEffect } from 'react'

const Overview = () => {
    const [, updateStartMenuType] = useStartMenuType()

    const toggleSearchMenu = () => {
        updateStartMenuType('search')
    }

    useEffect(() => {
        window.addEventListener("keydown", toggleSearchMenu, {
            passive: true
        })

        return () => {
            window.removeEventListener("keydown", toggleSearchMenu)
        }
    }, [])

    return (
        <StartLayout width={640}>
            <button onClick={toggleSearchMenu} className="cursor-text">
                <SearchBar disabled className="pointer-events-none" />
            </button>

            <section className="flex flex-col w-full px-8">
                <h5 className={`${styles['sub-title']} mt-4`}>Pinned</h5>
                <section className="grid grid-cols-6 items-start h-[228px] overflow-hidden">
                    <Pin icon="/apps/edge.svg" name="Edge" />
                    <Pin icon="/apps/file-explorer.png" name="Explorer" />
                </section>
            </section>

            <section className="flex flex-col w-full px-8">
                <h5 className={styles['sub-title']}>Recommended</h5>
                <section className="grid grid-cols-2 justify-start items-start h-[166px] px-6 gap-y-2 gap-x-4 overflow-hidden">
                    <Recommended icon="/apps/edge.svg" name="Microsoft Edge" subTitle="17m ago" />
                    <Recommended icon="/apps/file-explorer.png" name="File Explorer" subTitle="34m ago" />
                </section>
            </section>

            <footer className="flex flex-row justify-between items-center w-full h-[68px] mt-4 px-16 py-2 border-t border-b border-gray-300" style={{
                borderBottomColor: 'transparent'
            }}>
                <button className="flex flex-row items-center">
                    <img className="w-[36px] h-[36px] rounded-full" src="https://avatars.githubusercontent.com/u/35027979?s=400&u=28dbe76d9057768eed7cb2d346203b7c55c153ce&v=4" alt="SaltyAom" />
                    <h2 className="text-sm text-gray-700 font-semibold ml-4">Salty Aom</h2>
                </button>
                <button className="w-[36px] h-[36px] rounded-full cursor-pointer">
                    <Power className="text-gray-600 m-auto" style={{
                        transform: 'scale(.8)'
                    }} />
                </button>
            </footer>
        </StartLayout>
    )
}

export default Overview
