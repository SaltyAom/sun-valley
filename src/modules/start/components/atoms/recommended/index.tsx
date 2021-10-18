import type { RecommendedComponent } from './types'

const Recommended: RecommendedComponent = ({ icon, name, subTitle }) => (
    <button className="flex flex-row justify-start items-center px-2 py-1.5 rounded">
        <img className="w-[32px] h-[32px] object-contain" src={icon} alt={name} loading="lazy" />
        <section className="flex flex-col items-start mx-4">
            <h5 className="text-sm text-gray-700 font-semibold mb-0.5">{name}</h5>
            <p className="text-xs font-light text-gray-500">{subTitle}</p>
        </section>
    </button>
)

export default Recommended
