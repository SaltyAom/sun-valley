import { ChevronDown } from 'react-feather'

import { Selection } from '@modules/start/components'
import { useSearch, searchTypes } from '@modules/start/stores'
import type { SearchType } from '@modules/start/stores'

const searchTypeRegEx = RegExp(`^(${searchTypes.join('|')})`)

const SearchOptions = () => {
    const [searchValue, updateSearch] = useSearch()
    const search = searchValue.toLowerCase()

    const replaceSearchType = (type: SearchType) => () => {
        let value = searchValue.replace(searchTypeRegEx, type)
        if (!value.startsWith(`${type}:`)) value = `${type}: ${value}`

        updateSearch(value)
    }

    const removeSearchType = () => {
        let value = searchValue.replace(searchTypeRegEx, '').replace(/^: /, '')

        updateSearch(value)
    }

    return (
        <section className="flex flex-row items-center">
            <Selection
                active={
                    !searchTypes.some((type) => search.startsWith(`${type}:`))
                }
                onClick={removeSearchType}
            >
                All
            </Selection>
            {searchTypes.map((type) => (
                <Selection
                    key={type}
                    active={search.startsWith(`${type}:`)}
                    onClick={replaceSearchType(type)}
                >
                    {type}
                </Selection>
            ))}
            <Selection>
                More <ChevronDown className="icon" />
            </Selection>
        </section>
    )
}

export default SearchOptions
