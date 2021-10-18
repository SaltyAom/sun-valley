import type { PinComponent } from './types'

const Pin: PinComponent = ({ icon, name }) => (
    <button className="flex flex-col justify-center items-center py-2 rounded">
        <img className="w-[32px] h-[32px] object-contain mb-2" src={icon} alt={name} loading="lazy" />
        <h4 className="text-sm text-gray-700 text-center">{name}</h4>
    </button>
)

export default Pin
