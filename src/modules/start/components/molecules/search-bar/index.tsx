import type { DOMAttributes } from 'react'

import { Search } from 'react-feather'

import { TextInput } from '@components'

import { useSearch } from '@modules/start/stores'


const SearchBar = ({ className = "", disabled = false }) => {
    const [search, updateSearch] = useSearch()

    const preventDefault: DOMAttributes<HTMLFormElement>['onSubmit'] = (
        event
    ) => {
        event.preventDefault()
    }

    const broadcastSearch: DOMAttributes<HTMLInputElement>['onChange'] = (
        event
    ) => {
        updateSearch(event.currentTarget.value)
    }

    return (
        <form onSubmit={preventDefault} className={`mt-8 mb-4 px-8 ${className}`}>
            <TextInput
                value={search}
                autoFocus
                disabled={disabled}
                prefix={<Search className="icon -mirror" />}
                label="Type here to search"
                onChange={broadcastSearch}
            />
        </form>
    )
}

export default SearchBar
