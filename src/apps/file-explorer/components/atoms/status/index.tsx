import { Square } from 'react-feather'

const Status = () => {
    return (
        <footer className="flex justify-between items-end w-full h-[21px] text-gray-600 text-xs bg-white">
            <section className="flex flex-1 gap-6 px-3">
                <h4>0 items</h4>
                <h4>
                    0 items selected <span className="ml-1">0</span> MB
                </h4>
            </section>
            <section>
                <button className="w-[18px] h-[18px]">
                    <Square className="w-[14px] h-[14px]" />
                </button>
                <button className="w-[18px] h-[18px]">
                    <Square className="w-[14px] h-[14px]" />
                </button>
            </section>
        </footer>
    )
}

export default Status
