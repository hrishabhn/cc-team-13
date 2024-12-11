'use client'

import {type DropdownAnchor, DropdownItem, DropdownTransition} from '@/components/ui'
import {searchKeywords} from '@/lib/search'

import {TextInputContainer} from '../text'
import {type InputProps} from '../types'
import {Combobox, ComboboxInput, ComboboxOption, ComboboxOptions} from '@headlessui/react'
import {CaretDown} from '@phosphor-icons/react'
import {useState} from 'react'

type DropdownTextComboboxProps<T> = {
    anchor?: DropdownAnchor
    placeholder: string
    options: T[] | readonly T[]
} & InputProps<T | null>

type DropdownComboboxProps<T> = DropdownTextComboboxProps<T> & {
    getTitle: (value: T) => string
    getId: (value: T) => string
    getKeywords: (value: T) => string[]
}

export function DropdownCombobox<T>({
    anchor = 'bottom start',
    placeholder,

    name,
    defaultValue,
    value,
    setValue,
    options,

    getTitle,
    getId,
    getKeywords,
}: DropdownComboboxProps<T>) {
    const [query, setQuery] = useState<string>('')

    const displayOptions = options.filter(option => searchKeywords({query, keywords: getKeywords(option)}))

    return (
        <Combobox immediate name={name} defaultValue={defaultValue} value={value} onChange={setValue} onClose={() => setQuery('')}>
            <TextInputContainer icon={CaretDown}>
                <ComboboxInput<T>
                    placeholder={placeholder}
                    className="-mx-9 flex-1 bg-transparent px-9 py-2 outline-none disabled:text-g-500"
                    displayValue={value => (value ? getTitle(value) : '')}
                    onChange={e => setQuery(e.target.value)}
                />
            </TextInputContainer>

            <DropdownTransition>
                <ComboboxOptions
                    anchor={{
                        to: anchor,
                        gap: 8,
                    }}
                    className="z-50 origin-top rounded-lg bg-layer-1 shadow-md ring-1 ring-line transition dark:bg-layer-1-dark dark:ring-line-dark"
                >
                    <div className="max-h-96 w-64 overflow-y-scroll p-1">
                        {query.length === 0 ? (
                            <ComboboxOption value={null}>{({focus, selected}) => <DropdownItem title="None" active={selected} focus={focus} disabled />}</ComboboxOption>
                        ) : null}

                        {displayOptions.length > 0 ? (
                            displayOptions.map(option => (
                                <ComboboxOption key={getId(option)} value={option}>
                                    {({focus, selected}) => <DropdownItem title={getTitle(option)} active={selected} focus={focus} />}
                                </ComboboxOption>
                            ))
                        ) : (
                            <DropdownItem title="No matches" disabled />
                        )}
                    </div>
                </ComboboxOptions>
            </DropdownTransition>
        </Combobox>
    )
}

export function DropdownTextCombobox<T extends string>(props: DropdownTextComboboxProps<T>) {
    return <DropdownCombobox<T> {...props} getTitle={value => value} getId={value => value} getKeywords={value => [value]} />
}
