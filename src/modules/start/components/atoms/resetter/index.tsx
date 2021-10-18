import { useEffect } from 'react'

import { useStartMenuType } from '@stores/start'
import { useSearch } from '@modules/start/stores'

import { motion } from 'framer-motion'

const Resetter = () => {
    const [, updateType] = useStartMenuType()
    const [, updateSearch] = useSearch()

    useEffect(() => {
        return () => {
            updateType('overview')
            updateSearch('')
        }
    }, [])

    return (
        <motion.div
            className="hidden"
            exit={{
                // Dummy transition
                translateX: 0,
                transition: {
                    duration: 0.28
                }
            }}
        />
    )
}

export default Resetter
