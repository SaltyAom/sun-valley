import { useCallback } from 'react'
import type { DOMAttributes } from 'react'

import { useContextMenu } from '@stores/context-menu'

import { ChevronDown } from 'react-feather'

import { Context } from '@modules/context-menu'

import { Selection } from '@modules/start/components'
import {
    useSearch,
    searchTypes,
    displayedShortcut
} from '@modules/start/stores'
import type { SearchType } from '@modules/start/stores'

const searchTypeRegEx = RegExp(`^(${searchTypes.join('|')})`)

const SearchOptions = () => {
    const [, updateContextMenu] = useContextMenu()
    const [searchValue, updateSearch] = useSearch()
    const search = searchValue.toLowerCase()

    const replaceSearchType = useCallback((type: SearchType) => () => {
        let value = searchValue.replace(searchTypeRegEx, type)
        if (!value.startsWith(`${type}:`)) value = `${type}: ${value}`

        updateSearch(value)
    }, [])

    const removeSearchType = useCallback(() => {
        let value = searchValue.replace(searchTypeRegEx, '').replace(/^: /, '')

        updateSearch(value)
    }, [])

    const showContext: DOMAttributes<HTMLButtonElement>['onClick'] = useCallback((
        event
    ) => {
        const element = event.currentTarget
        const { top, left } = element.getBoundingClientRect()

        updateContextMenu({
            type: 'append',
            index: 0,
            position: {
                top: top + element.clientHeight,
                left
            },
            contexts: [
                [
                    <Context
                        title="Folders"
                        onClick={replaceSearchType('folders')}
                    />,
                    <Context
                        title="Music"
                        onClick={replaceSearchType('music')}
                    />,
                    <Context
                        title="Photos"
                        onClick={replaceSearchType('photos')}
                    />,
                    <Context
                        title="Vidoes"
                        onClick={replaceSearchType('videos')}
                    />
                ]
            ]
        })
    }, [])

    const shortcut = searchTypes.find(
        (type) =>
            search.startsWith(`${type}:`) && !displayedShortcut.includes(type)
    )

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
            {displayedShortcut.map((type) => (
                <Selection
                    key={type}
                    active={search.startsWith(`${type}:`)}
                    onClick={replaceSearchType(type)}
                >
                    {type}
                </Selection>
            ))}
            {shortcut && <Selection active={true}>{shortcut}</Selection>}
            <Selection onClick={showContext}>
                More <ChevronDown className="icon" />
            </Selection>
        </section>
    )
}

export default SearchOptions
