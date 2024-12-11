'use client'

import {Heading} from '@/components/layout'
import {DropdownCombobox, DropdownTextCombobox, TextInput} from '@/components/ui'

import {useState} from 'react'

const allPeople = ['Tom Cook', 'Wade Cooper', 'Tanya Fox', 'Arlene Mccoy', 'Devon Webb'] as const
type Person = (typeof allPeople)[number]

export function FormExample() {
    const [text, setText] = useState<string>('')
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(allPeople[0])

    return (
        <div>
            <Heading size="h1">Form</Heading>
            <div className="space-y-4">
                <TextInput type="text" placeholder="Text" value={text} setValue={setText} />
                <TextInput type="multilineText" placeholder="Multiline Text" value={text} setValue={setText} />
                <TextInput type="url" placeholder="URL" value={text} setValue={setText} />
                <TextInput type="number" placeholder="Number" value={text} setValue={setText} />
                <TextInput type="email" placeholder="Email" value={text} setValue={setText} />
                <TextInput type="password" placeholder="Password" value={text} setValue={setText} />

                <DropdownTextCombobox placeholder="Select Person" value={selectedPerson} setValue={setSelectedPerson} options={allPeople} />
                <DropdownCombobox<Person>
                    placeholder="Filter"
                    value={selectedPerson}
                    setValue={setSelectedPerson}
                    options={allPeople}
                    getTitle={person => person}
                    getId={person => person}
                    getKeywords={person => [person]}
                />
            </div>
        </div>
    )
}
