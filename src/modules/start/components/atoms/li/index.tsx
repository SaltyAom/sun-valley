import type { LiComponent } from './types'

const Li: LiComponent = ({ icon, title, detail }) => (
    <button
        className="flex flex-row items-center gap-4 w-full h-[48px] rounded px-5 light-overlay"
        role="listitem"
    >
        {icon && (
            <div className="w-[24px] h-[24px] object-contain">
                {icon && typeof icon === 'string' ? <img src={icon} /> : icon}
            </div>
        )}
        <div className="flex flex-col gap-0.5 items-start">
            <h3 className="text-sm text-gray-800">{title}</h3>
            {detail && <p className="text-sm text-gray-500">{detail}</p>}
        </div>
    </button>
)

export default Li
