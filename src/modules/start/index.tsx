import { MoreHorizontal, Search } from 'react-feather'

import { TextInput } from '../../components'

const Start = () => {
    return (
        <div className="fixed z-40 bottom-16 w-full">
            <aside className="flex flex-col max-w-[720px] w-full mx-auto vibrance rounded">
                <form className="mt-8 mb-4 px-8">
                    <TextInput prefix={<Search className="icon -mirror" />} label="Type here to search" />
                </form>

                <nav className="flex flex-row justify-between pl-4 pr-8">
                    <section className="flex flex-row items-center">
                        <button className="px-4 py-2">All</button>
                        <button className="px-4 py-2">Apps</button>
                        <button>Documents</button>
                    </section>
                    <section className="flex flex-row items-center">
                        <button>
                            <MoreHorizontal />
                        </button>
                    </section>
                </nav>

                <h5>Frequent</h5>

                <h5>Recent</h5>
            </aside>
        </div>
    )
}

export default Start
