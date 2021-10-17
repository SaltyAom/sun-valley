import type { CardComponent } from './types'

import styles from './card.module.sass'

const Card: CardComponent = ({ name, icon }) => {
    return (
        <button className={`flex flex-col items-center w-full px-2 py-3 ${styles.card} border border-gray-300 rounded`}>
            <img className="w-[42px] h-[42px] object-contain p-1" src={icon} loading="lazy" />
            <h5 className="text-gray-800 text-xs font-light mt-1">{name}</h5>
        </button>
    )
}

export default Card
