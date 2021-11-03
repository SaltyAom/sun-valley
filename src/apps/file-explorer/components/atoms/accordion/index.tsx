import { useReducer } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { ChevronRight } from 'react-feather'

import style from '../../../file-explorer.module.sass'

import type { AccordionComponent } from './types'

const Accordion: AccordionComponent = ({ title, children }) => {
    const [isOpen, toggle] = useReducer((v) => !v, true)

    return (
        <>
            <button className="flex items-center w-full px-0.5 py-1 gap-1" onClick={toggle}>
                <ChevronRight className={`text-gray-400 ${style['sidebar-icon']} ${isOpen ? style['chevron-down'] : ''}`} />
                <h4 className="text-blue-900 font-light text-sm">{title}</h4>
                <div className="flex flex-1 h-[1px] ml-1 bg-gray-200" />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.section className="flex flex-col w-full px-4">
                        {children}
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    )
}

export default Accordion
