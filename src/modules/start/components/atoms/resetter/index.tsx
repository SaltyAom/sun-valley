import { useEffect } from 'react'

import { useStartMenuType } from '@stores/start'

import { motion } from 'framer-motion'

const Resetter = () => {
    const [, updateType] = useStartMenuType()

    useEffect(() => {
        return () => {
            updateType('overview')
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
