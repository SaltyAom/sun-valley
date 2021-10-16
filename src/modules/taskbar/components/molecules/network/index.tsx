import { Volume2, Wifi } from 'react-feather'

import { TaskbarItem } from '../../atoms'

const Network = () => (
    <TaskbarItem
        name="Internet Access"
        interaction="fade"
        className="flex flex-row items-center gap-1"
    >
        <Wifi className="icon" />
        <Volume2 className="icon" />
    </TaskbarItem>
)

export default Network
